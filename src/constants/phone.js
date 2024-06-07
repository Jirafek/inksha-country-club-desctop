import { useURLData } from 'utils/URLData'

const GetPhone = () => {
   const { utm_source } = useURLData()

   if (utm_source === 'yandex')
      return "+74995055067"
   else if (utm_source === 'vkontakte')
      return "+74995055087"
   else
      return "+74995055031"

}

module.exports = { GetPhone }