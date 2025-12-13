import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants'

import Base from '../components/Base'
import CaseStudyCard from '../components/CaseStudyCard'
import HomepageHero from '../components/HomepageHero'
import TickerTape from '../components/TickerTape'

interface HomeProps {
  isLightMode: boolean
}

export default function Home({ isLightMode }: HomeProps) {
  const [caseStudies, setCaseStudies] = useState([]);
  const CaseStudyList = caseStudies.map(caseStudy => (
      <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
  ))
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/case-studies`);
        setCaseStudies(response.data);
      } catch (error) {
        console.error('Failed to fetch caseStudies:', error);
      }
    };

    fetchCaseStudies();
  }, []);
  return (
    <Base>
        <HomepageHero isLightMode={isLightMode} />
        <TickerTape />
        { CaseStudyList }
    </Base>
  )
}