

import { Box } from "@chakra-ui/react"
import { Wrap,WrapItem,Center,Text,Image,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"
const CartEmpty=()=>{


return(




<Box>

<Wrap mt='120px' >

<WrapItem >
<Center ml='100px' >
<Link style={{fontColor:"red"}}>Home</Link>
<Text fontWeight={'bold'}>/ My Cart</Text>
</Center>

</WrapItem>










</Wrap>

<WrapItem>
<Center ml='100px' mt='30px' >

<Text fontWeight={'bold'}>My Cart(Items)</Text>
</Center>

</WrapItem>







<Wrap spacing='30px' justify='center' mt='-100px'>

<WrapItem >
    <Center mt='100px' display={'block'}>

<Image w='200px' h='140px' src='https://www.craftsvilla.com/assets/group-6.png'/>
<Text mt='16px'  fontSize="23px">Your Cart is Empty</Text>
<Button mt='10px' bg='#902735' color={'white'} _hover={{ bg:'#902735'}}>CONTINUE SHOPPING</Button>
    </Center>
</WrapItem>




</Wrap>



</Box>

)


}

export default CartEmpty