// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

interface IconProps {
  prefix: string,
  name: string
}

export default function Icon({ prefix, name }):IconProps {
  return (
    <>
      { prefix } { name }
    </>
  );
}