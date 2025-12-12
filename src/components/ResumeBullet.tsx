import { BulletType } from '../api'

interface ResumeBulletProps {
  bullet: BulletType
}

export default function ResumeBullet({ bullet }: ResumeBulletProps) {
  return (
    <li className="ml-8 mb-6">
      <div
        className="text-lg text-gray-900 dark:text-gray-100"
        dangerouslySetInnerHTML={{ __html: bullet.content }}
      />
    </li>
  )
}