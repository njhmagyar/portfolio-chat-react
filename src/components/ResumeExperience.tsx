import { ExperienceType } from '../api';

import ResumeBullet from './ResumeBullet'

interface ResumeEducationProps {
  experience: ExperienceType,
  showCompanyName: boolean
}

export default function ResumeExperience({ experience, showCompanyName }: ResumeExperienceProps) {
  const companyName = showCompanyName ? (
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      {experience.company_name}
    </h3>
  ) : '';

  const parseDate = (dateString: string) => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  const getMonthName = (date: Date) => (date.toLocaleString('en-US', { month: 'short' }));
  const getDateDisplay = (date: Date | null) => date ? `${getMonthName(parseDate(date))} ${parseDate(date).getUTCFullYear()}` : 'Present';
  const durationDisplay = `${getDateDisplay(experience.start_date)} - ${getDateDisplay(experience.end_date)}`;

  const BulletListItems = experience.bullets.map(bullet => (
    <ResumeBullet key={bullet.id} bullet={bullet} />
  ))
  return (
    <div className={experience.order > 1 ? 'mt-8' : 'mt-4'}>
      { companyName }
      <p className="text-xl mb-4 text-gray-900 dark:text-gray-100 flex justify-between align-center">
        <em>{ experience.job_title }</em>
        <em>{ durationDisplay }</em>
      </p>
      <ul className="list-disc">
        { BulletListItems }
      </ul>
    </div>
  )
}