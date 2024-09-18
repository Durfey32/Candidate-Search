import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState([]);{
    
  }

  const [searchTerm, setSearchTerm] = useState('');
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
