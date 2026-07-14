// src/hooks/useDashboard.js
import { useState, useMemo } from 'react';
import { initialPlaylistsData } from '../data/playlistsData';
import { initialInterviewData } from '../data/interviewData';

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState('playlists');
  const [activeSubTab, setActiveSubTab] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');

  const playlistsModel = useMemo(() => initialPlaylistsData, []);
  const interviewModel = useMemo(() => initialInterviewData, []);

  // ১. প্লেলিস্ট ফিল্টারিং লজিক
  const filteredPlaylists = useMemo(() => {
    if (!searchQuery) return playlistsModel.phases;
    return playlistsModel.phases.map(phase => ({
      ...phase,
      cards: phase.cards.filter(card => 
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(phase => phase.cards.length > 0);
  }, [searchQuery, playlistsModel]);

  // ২. ইন্টারভিউ কোশ্চেন ফিল্টারিং লজিক (ক্যাটাগরি + সার্চ বার দুটোই একসাথে হ্যান্ডেল করবে)
  const filteredQuestions = useMemo(() => {
    // প্রথমে ক্যাটাগরি অনুযায়ী ফিল্টার
    let questions = interviewModel.questions;
    if (activeSubTab !== 'all') {
      questions = questions.filter(q => q.category === activeSubTab);
    }
    
    // তারপর সার্চ কোয়েরি অনুযায়ী ফিল্টার (টপিক, কোশ্চেন বা আনসারের সাথে মিললে দেখাবে)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter(q => 
        q.topic.toLowerCase().includes(query) ||
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query)
      );
    }
    
    return questions;
  }, [activeSubTab, searchQuery, interviewModel]);

  // ট্যাব চেঞ্জ হলে সার্চ কুয়েরি ক্লিয়ার করার জন্য ডেডিকেটেড ফাংশন
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery(''); // ট্যাব বদলালে সার্চ ফিল্ড খালি হয়ে যাবে, যা বেস্ট ইউজার এক্সপেরিয়েন্স দেয়
    setActiveSubTab('all'); // সাব-ট্যাবও 'all' এ রিসেট হবে
  };

  return {
    title: playlistsModel.title,
    subtitle: playlistsModel.subtitle,
    phases: filteredPlaylists,
    topics: playlistsModel.topics,
    docs: playlistsModel.docs,
    protocols: playlistsModel.protocols,
    interviewData: {
      ...interviewModel,
      questions: filteredQuestions
    },
    activeTab,
    activeSubTab,
    setActiveSubTab,
    switchTab: handleTabChange,
    searchQuery,
    setSearchQuery
  };
};