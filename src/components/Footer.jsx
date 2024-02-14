import { Link } from "react-router-dom"
import { v4 as uuid4 } from 'uuid'
import getRoutes from '../utils/routes'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="w-full xl:h-[275px] sm:h-[410px] h-[500px] bg-[#201e1f] px-4 border-t-[1px] xl:border-t-transparent pt-5 flex flex-col justify-between border-t-[#AB8E67]">
            <ul className="flex justify-around flex-wrap gap-6">
                {getRoutes().map((el, i) => {
                    if (!el.title) return null
                    if (el.link.includes('/')) {
                        return (
                            <Link key={uuid4()} className="text-white md:text-[32px] text-[23px]" to={el.link}>
                                {t(el.title)}
                            </Link>
                        )
                    } else {
                        return (
                            <a key={uuid4()} className="text-white md:text-[32px] text-[23px]" href={el.link}>
                                {t(el.title)}
                            </a>
                        )
                    }
                })}
            </ul>
            <div className='flex flex-col justify-center items-center'>


                <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-20 gap-4 pb-2">
                    <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" href="/pdf/confi.pdf" target="_blank">
                        {t('privacyPolicy')}
                    </a>
                    <Link className="text-white 2xl:text-[18px] text-[15px] font-medium underline" to="/rules">
                        {t('accommodationRules')}
                    </Link>
                    <p className="text-white 2xl:text-[18px] text-[15px] text-center font-medium">
                        {t("fullName")} <br />
                        {t('allRightsReserved')}
                    </p>
                    <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" target='_blank' href="/pdf/about.pdf">
                        {t('aboutUsPresentation')}
                    </a>

                    <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" href="/pdf/oferta.pdf" target="_blank">
                        {t('offerAgreement')}
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
