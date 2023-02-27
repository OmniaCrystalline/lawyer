import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react"

export const Landing = () => {
    return (<Box as='article'>
        <UnorderedList>
            <ListItem>Земельні спори — це конфлікти щодо права власності, користування чи меж земельної ділянки.</ListItem>
            <ListItem>Земельні спори можуть стосуватися окремих осіб, груп, громад</ListItem>
            <ListItem>Земельні суперечки можуть мати правові, соціальні, економічні, екологічні чи політичні наслідки для залучених сторін та їхнього оточення.</ListItem>
            <ListItem>Юристи можуть допомогти у вирішенні земельних спорів, надаючи своїм клієнтам юридичні консультації, представництво, переговори, посередництво, арбітраж, судові процеси або адвокатські послуги.</ListItem>
        </UnorderedList>
        <Text as='h6'> Юристи можуть допомогти захистити права та інтереси своїх клієнтів у земельних спорах, дослідивши відповідне законодавство та факти справи; визначення сильних і слабких сторін своїх претензій; спілкування з іншими сторонами; пошук позасудового врегулювання; подання позовів; отримання судових заборон або відшкодування збитків; та виконання судових рішень.</Text>
    </Box>)
}