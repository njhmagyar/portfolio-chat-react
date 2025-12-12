import { CaseStudyType } from '../api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_BASE_URL } from '../constants'

import Base from '../components/Base';


export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/case-studies/${slug}`);
        setCaseStudy(response.data.case_study);
      } catch (error) {
        setError('Failed to fetch case study');
        console.error('Failed to fetch case study: ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <Base>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600 dark:text-gray-400">Loading...</div>
        </div>
      </Base>
    )
  }

  if (error || !caseStudy) {
    return (
      <Base>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-red-600 dark:text-red-400">
            {error || 'Case study not found'}
          </div>
        </div>
      </Base>
    );
  }

  return (
    <Base>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {caseStudy.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {caseStudy.description}
        </p>
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: caseStudy.content }}
        />
      </div>
    </Base>
  );

}