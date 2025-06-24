import { Icon } from "@chakra-ui/react"
import { memo } from "react"

function IconDefault({ asIcon, ...props }) {
  return <Icon as={asIcon} w={"24px"} h="24px" {...props} />
}

export default memo(IconDefault)