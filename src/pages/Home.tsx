import { useState, useEffect } from 'react';
import axios from 'axios';

import Base from '../components/Base'
import HomepageHero from '../components/HomepageHero'

interface HomeProps {
  isLightMode: boolean
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portfolio-chat-backend-45247c01c107.herokuapp.com'

export default function Home({ isLightMode }: HomeProps) {
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/case-studies`);
        setCaseStudies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch caseStudies:', error);
      }
    };

    fetchCaseStudies();
  }, []);
  return (
    <Base>
      <HomepageHero isLightMode={isLightMode} />
    </Base>
  )
}