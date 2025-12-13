import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

interface IconProps {
  prefix: IconPrefix,
  name: IconName
}

export default function Icon({ prefix, name }):IconProps {
  return (
    <>
      <FontAwesomeIcon icon={[prefix, name]} />
    </>
  );
}