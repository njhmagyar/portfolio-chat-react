import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../constants'
import { ResumeType } from '../api'

import Base from '../components/Base'; 
import ResumeHeader from '../components/ResumeHeader';
import ResumeEducation from '../components/ResumeEducation';
import ResumeExperience from '../components/ResumeExperience';
import ResumeSkillCategory from '../components/ResumeSkillCategory';

export default function Resume() {
  const [resume, setResume] = useState<ResumeType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const EducationListItems = (resume?.education || []).map(education => (
    <ResumeEducation key={education.id} education={education} />
  ))

  const ExperienceListItems = (resume?.experiences || []).map((experience, index) => {
    const previousExperience = index > 0 ? resume.experiences[index - 1] : null;
    const showCompanyName = !previousExperience || previousExperience.company_name !== experience.company_name;
    return <ResumeExperience key={experience.id} experience={experience} showCompanyName={showCompanyName} />
  })

  const SkillCategories = (resume?.skill_categories || []).map(category => (
    <ResumeSkillCategory key={category.id} category={category} />
  ))

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/resume/`);
        setResume(response.data);
      } catch (error) {
        setError('Failed to fetch resume');
        console.error('Failed to fetch resume: ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResume();
  }, []);

  if (loading) {
    return (
      <Base>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600 dark:text-gray-400">Loading...</div>
        </div>
      </Base>
    )
  }

  if (error || !resume) {
    return (
      <Base>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-red-600 dark:text-red-400">
            {error || 'Resume not found'}
          </div>
        </div>
      </Base>
    );
  }

  return (
    <Base>
      <div className="container mx-auto px-4 py-8 max-w-[calc(769px)]">
        <ResumeHeader resume={resume} />
        <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
        <ul>
          { SkillCategories }
        </ul>
        <h2 className="text-3xl font-bold mt-12 text-gray-900 dark:text-gray-100">Experience</h2>
        <ul>
          { ExperienceListItems }
        </ul>
        <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100">Education</h2>
        <ul>
          { EducationListItems }
        </ul>
      </div>
    </Base>
  );
}