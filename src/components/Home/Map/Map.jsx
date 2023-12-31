import React, { useEffect } from 'react'
import './map.css'
import { base, increase } from './logic'
import { isItWinterNow } from 'utils/helpers'
import { useTranslation } from 'react-i18next'

const Map = () => {
    const { t } = useTranslation()
    useEffect(() => {
        base(document)
        increase(document)
    }, [])

    return <div className='map' id='map'>
        <div className="map-wrapper">
            <figure className="map-figure">
                <img src={`/image/map${isItWinterNow()}.webp`} alt="Икша Кантри Клаб" className="map_image" />
            </figure>
            <div className="map-controls">
                <svg className="map-controls-list" viewBox="0 0 4281.77 1911.5044">
                    <g data-geo="1" className="map_geo">
                        <text x="994.67101" y="263.59869">{t('map.forest')}</text>
                        <path
                            d="M 574.67101,163.59869 C 492.73775,165.05531 454.372,162.59761 398.23399,201.238 329.14105,248.7954 307.93914,264.40704 307.72313,347.91724 307.29109,514.93768 439.03393,569.04648 649.23419,590.77922 754.33433,601.6456 815.30639,562.53073 891.08387,528.2511 972.42812,491.45321 1004.244,504.72603 1004.46,421.21581 1004.892,254.19539 891.4012,188.68176 681.20093,166.949 c -19.70628,-2.03744 -87.62225,-3.68646 -106.52992,-3.35031 z" />
                        <g data-position="25" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 847.20476,461.09712 26.77653,-50.19033 c 1.1618,0.11423 2.3236,0.22845 3.4854,0.34268 l 21.29909,5.07876 2.48938,-5.78011 27.01787,6.34679 7.90015,8.68684 17.94436,4.41742 -31.68329,54.03574 z" />
                        </g>
                        <g data-position="26" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 741.94668,339.76605 7.45014,-4.30541 7.33282,-3.46474 3.07206,-8.5935 6.02678,-9.96953 8.3435,-8.10816 12.41358,-6.09479 11.45089,-3.3074 16.735,2.09471 10.31954,4.89943 8.53283,8.7295 7.72549,13.07293 2.94206,13.13359 2.14071,12.11891 -4.9721,6.33746 -8.67484,3.91874 -9.10951,4.20609 -7.75216,1.52003 -0.87868,-11.63423 -59.24517,6.33679 -2.91273,5.0981 -8.83217,-5.95079 -6.24613,-7.03547 1.18603,-5.52811 z" />
                        </g>
                        <g data-position="27" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 685.97224,485.68427 69.98138,-126.08116 59.73585,-4.25075 -1.71204,41.45149 -75.02548,150.97499 -53.33706,-24.47249 z" />
                        </g>
                        <g data-position="28" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 678.65009,326.10845 0.0747,-39.52345 30.66124,-6.40546 28.40856,25.1945 -0.18267,34.18668 -32.0873,9.44418 z" />
                        </g>
                        <g data-position="29" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 567.8499,313.50887 64.46127,14.65829 24.42715,-46.40825 -3.73207,-39.64079 -57.16513,-7.27281 -0.67335,-7.49148 4.05275,-2.14871 -0.27067,-10.12887 -4.81076,-2.89805 -6.50547,0.67401 -2.63872,4.30209 0.51201,7.72281 3.73341,3.46207 0.41668,6.27146 -3.75274,-0.33134 -21.16776,38.45943 1.6447,20.29507 3.71274,2.45404 1.6827,3.48941 -4.57275,2.69405 z" />
                        </g>
                        <g data-position="30" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 548.41618,270.08201 2.57739,-3.1174 2.38938,-1.23869 -0.13167,-7.57515 1.6847,-1.09302 2.87172,0.73035 -0.071,6.47879 4.52309,-0.0573 5.2321,1.19233 -3.45573,6.88147 2.17204,20.2474 -5.13977,1.9537 -0.34167,-10.4102 h -4.11442 l -7.18514,7.18814 z" />
                        </g>
                        <g data-position="31" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 546.31547,295.01184 10.20921,-10.76688 4.44775,0.37234 -0.15767,9.64585 4.20808,-1.42169 4.8311,1.83237 2.17338,4.8961 -5.38544,1.60503 -2.97706,-3.38207 h -2.69039 l 0.18634,16.57766 19.78706,5.39311 -5.39978,8.95951 -29.42458,-6.31046 z" />
                        </g>
                        <g data-position="32" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 505.97968,378.94783 11.03255,2.56538 13.07059,-3.95841 -1.31703,-3.99908 3.0784,-4.43575 0.89168,-5.21944 -1.65736,-4.86743 -3.62774,-2.35871 -0.87402,-1.26569 1.04435,-2.81973 0.0463,-1.34302 -2.81068,1.45069 1.9657,-5.74178 -0.197,-3.00706 -1.3587,-2.76438 -0.0853,-2.78373 0.34031,-2.69638 0.76068,-1.40836 -2.83339,2.45771 -1.27236,3.2884 -0.93435,-2.47172 -1.22636,-2.46871 -0.37934,-2.40705 0.84669,-2.06137 -2.68806,2.59271 -1.19502,2.72439 0.42001,2.33005 0.24667,2.41671 -0.42668,2.31138 -1.45936,1.95837 0.25601,-2.86372 v -3.11706 l -1.14836,-2.40305 -2.07004,-0.92002 -2.36405,-0.0757 1.64237,1.50606 0.72568,2.23105 -0.32701,1.8437 -2.0227,1.61203 -1.16103,2.84839 0.59968,2.32805 1.12636,3.23506 0.31834,2.15605 -2.63572,-3.53807 -1.05036,-0.33168 0.30001,3.08706 -0.081,1.83404 -0.07,2.32105 0.25134,1.51336 -2.9654,1.26836 -1.35102,4.89043 0.46734,5.29077 1.98637,3.87874 1.92071,1.6747 z" />
                        </g>
                        <g data-position="33" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 563.92515,467.15791 20.07174,-29.92526 37.92608,7.13547 -0.46734,8.79551 6.26145,1.39603 1.51737,34.55935 -11.95291,16.36766 -8.46283,-2.25872 -4.20275,4.7201 -39.41345,-10.30821 z" />
                        </g>
                        <g data-position="34" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 355.12454,370.50394 51.14934,-75.19239 92.29435,18.16734 -13.9746,20.2114 1.6179,5.56268 -38.54186,58.43646 -92.71107,-21.81703 z" />
                        </g>
                        <g data-position="35" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 456.0434,434.26408 2.85818,1.54341 0.71655,2.79124 2.32737,2.19864 3.21928,0.0929 2.13834,-2.50038 25.77549,6.57245 v 1.66834 l 0.12068,2.79265 2.01907,2.20056 4.35775,-0.32999 2.10628,-2.60126 3.0986,0.60388 13.25804,-13.45321 0.34036,-2.34858 -0.96545,-3.81751 -2.24629,-3.46112 -2.56308,-0.96357 -2.02708,-3.95469 -2.34717,-3.00102 -3.57284,-2.17605 0.20271,-10.5493 -36.34177,-9.79833 -13.95621,17.23159 z" />
                        </g>
                        <g data-position="36" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 427.37201,488.13772 13.54655,-37.15259 3.72134,-1.52927 3.93112,1.19598 v 2.71016 l 28.79725,4.72262 3.65158,-0.96546 17.08545,8.22288 -0.9862,2.54422 -2.46361,1.2648 -2.47822,-1.37323 3.64874,22.30683 -20.15624,30.68999 -43.44503,-9.87282 -1.95307,-21.72605 -2.09449,0.28756 z" />
                        </g>
                    </g>
                    <g data-geo="2" className="map_geo">
                        <text x="1421.78546" y="923.5692" fontFamily="Verdana" fontSize="35" fill="blue">{t('map.derevnya')}</text>
                        <path
                            d="m 821.78546,1023.5692 c -85.50159,4.649 -142.2058,-5.8007 -186.43137,9.9553 -79.01345,28.1498 -173.58649,3.598 -198.9811,87.1082 -15.89687,52.2769 -49.79059,123.8158 -9.84186,161.2143 33.17546,31.0576 85.70371,66.0155 158.33838,84.9423 101.65548,26.4889 175.55882,116.8265 259.88541,125.5451 57.46442,5.9413 178.48778,71.5308 262.00758,51.0497 69.2345,-16.9781 156.2014,-57.9922 185.855,-81.2661 158.477,-124.3818 169.4847,-132.9838 169.7007,-216.494 0.432,-167.0204 24.1783,-141.8082 -10.0061,-241.4197 -6.4306,-18.73851 -611.64387,18.3382 -630.52664,19.3649 z" />
                        <g data-position="1" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 1199.9953,1396.1015 22.6118,-50.2018 17.0916,1.4303 11.2762,-19.0093 9.1285,1.6782 4.4869,-7.2314 28.6252,4.9932 0.1291,7.0363 5.4731,1.5085 0.3432,17.811 18.6671,2.1204 0.4638,3.8731 -13.819,50.0613 z" />
                            <path
                                d="m 1144.7022,1333.2281 -32.3333,65.8 79.4407,12.2039 30.2488,-65.9743 -19.8079,-2.1723 0.2385,-7.8962 -5.4985,-0.4827 0.1244,-7.6341 -30.1629,-4.2041 -4.0664,7.1768 -7.9207,-0.907 -4.041,4.4087 z" />
                            <path
                                d="m 1059.1189,1340.0683 17.2584,-29.6509 9.021,1.3793 4.9763,-7.1843 27.6578,5.0252 0.8759,6.9496 5.4684,1.3586 -0.043,12.22 20.1573,2.2694 -28.5564,54.9291 -62.154,-7.8773 7.8509,-15.5849 z" />
                            <path
                                d="m 959.27532,1391.625 40.21537,-64.2396 8.36481,1.139 5.1657,-7.4776 28.2773,5.0337 v 8.049 l 5.3185,0.6175 0.231,4.9386 11.4789,1.2058 1.9771,22.6515 -16.7116,36.4827 z" />
                            <path
                                d="m 1053.4742,1296.8369 82.9924,-5.2525 -16.4024,-51.5067 -6.1651,-0.2687 -5.129,-18.9339 -12.7376,0.2084 -1.3766,-6.1944 -39.6704,2.4514 -2.7615,6.6111 0.3224,25.2093 -11.7269,0.7241 z" />
                        </g>
                        <g data-position="2" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 685.60956,1202.4785 -1.40936,-63.0186 30.66061,-45.2316 20.15373,-1.676 18.27236,-3.3974 11.89224,-2.6734 12.80958,9.2122 14.9563,7.1788 14.58029,6.8081 19.37371,5.6988 1.28136,47.6729 -25.02849,45.6289 z" />
                        </g>
                        <g data-position="3" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 1212.1926,1123.7869 -0.524,-15.163 7.6075,-16.8783 -0.3427,-9.7735 2.1294,-1.3354 1.2834,2.0794 6.5321,-12.9496 47.2103,3.7981 0.7073,18.1623 -14.5436,37.8501 z" />
                        </g>
                        <g data-position="4" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 1110.1666,1202.4078 2.6581,-42.7789 18.793,-17.0416 64.1726,1.6033 9.6235,34.6507 -18.9243,25.8599 z" />
                        </g>
                        <g data-position="5" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 908.10063,1183.7514 182.46147,16.9787 72.7049,-113.5979 -1.932,-31.1126 -5.0268,-0.4734 0.3413,-5.0134 -17.2816,-0.9307 -0.392,-8.3855 -6.5908,-6.9721 -29.0473,0.5346 -5.9148,20.8444 2.3401,32.4172 -137.6174,-9.4207 z" />
                        </g>
                        <g data-position="6" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 947.6248,1388.4156 70.5669,-115.9961 -34.69797,-4.6651 -0.71654,-23.4783 -41.36374,-6.464 -12.55281,21.9773 -6.73556,-1.8253 -29.68022,53.3301 -0.50912,14.3687 -4.30684,7.4804 0.52044,18.5661 -15.98281,22.1735 z" />
                        </g>
                        <g data-position="7" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 732.60917,1342.2812 53.34708,-87.996 6.88735,-3.7695 h 7.32766 l 8.63536,1.9932 1.32656,-7.4521 8.33177,-1.4482 15.27569,2.8501 8.65327,3.2896 6.0869,6.5017 35.84159,6.4046 2.83603,5.1545 -1.65466,5.6994 -45.64983,91.1111 -3.53089,3.825 H 825.9312 l -91.65982,-18.3974 z" />
                        </g>
                        <g data-position="8" className="map_button">
                            <path d="m w23" />
                            <path
                                d="m 1356.7008,1007.7112 -54.6614,176.4804 -20.6121,4.3012 -17.1689,19.8597 -10.6087,19.1281 -2.5381,24.308 8.8928,24.8435 16.5541,8.806 19.477,7.6124 35.9066,1.0616 32.1353,-8.5383 22.8636,-15.1738 16.2883,-22.2866 4.5897,-21.1438 -8.3553,-19.3676 -14.5366,-11.412 -9.2661,-3.7185 54.3239,-186.7251 z" />

                        </g>
                        <g data-position="9" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 656.90499,1325.9116 36.8094,-42.4315 4.77743,2.0453 1.00468,-1.6607 3.68008,1.7954 -0.50401,-23.0305 -4.88343,1.7494 -7.49615,-0.498 -5.06944,-7.6128 -2.36338,-8.2282 -1.46403,-6.3208 5.40278,-3.424 4.40409,-0.9854 v -7.0741 l 5.92011,-4.2034 19.9084,3.5074 3.60673,7.7714 0.68268,10.1842 -7.25614,6.2755 -6.62013,-0.798 -2.21004,3.4734 1.9067,30.2599 13.99428,5.6741 c 0.3446,0.786 0.66401,1.4285 0.66401,2.2647 l 8.5075,3.0768 -28.23722,43.6382 z" />
                        </g>
                        <g data-position="10" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 540.05547,1279.8735 27.86622,-26.7169 -0.24702,-36.8316 3.67137,0.4828 0.88343,7.3484 19.14977,6.134 10.50216,-10.1429 5.23646,-2.8285 7.90373,2.7577 54.69815,24.8794 1.17947,5.6032 -2.5296,6.0464 -51.24552,56.8723 -8.83052,4.7584 -8.71173,-0.2102 -59.25483,-27.4769 -1.0918,-4.7084 z" />
                        </g>
                        <g data-position="11" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 471.57601,1070.3583 49.72096,-12.3076 71.09298,-12.8791 84.36988,-9.6734 72.25454,-5.4759 18.12115,0.5204 10.52196,37.3926 -45.44618,3.0736 -47.70331,6.6959 -40.04378,9.6301 -36.03676,2.1459 -32.3107,4.3294 -43.91126,9.6734 -33.92106,10.5654 -36.19327,-32.5238 z" />
                        </g>
                        <g fill="#00000000" stroke="none" data-tt="44">
                            <path d="m 2181" />
                            <path
                                d="m 475.73294,1168.2446 69.17432,-65.1126 25.78728,-3.463 18.28898,34.6347 -3.99382,2.5287 -0.53647,20.9666 -61.68167,62.9988 -45.08131,-18.5944 0.72598,-30.2497 z" />
                        </g>
                    </g>
                    <g data-geo="3" className="map_geo">
                        <text x="3406.5042" y="990.859" fontFamily="Verdana" fontSize="35" fill="blue">{t('map.shale')}</text>
                        <path
                            d="m 3406.5042,1090.859 c -15.8969,52.2769 -73.745,248.034 -77.4759,305.6612 -2.9361,45.3494 169.5334,34.0746 244.5529,46.0774 14.7715,-192.3918 48.816,-259.2067 51.9053,-349.8346 -126.4396,-11.0868 -94.5277,-6.3067 -218.9823,-1.904 z" />
                        <g data-position="37" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3474.6801,1325.4689 36.0327,-21.0051 38.3394,23.9351 -1.9727,13.6116 1.0307,30.2653 -7.6735,26.8732 -0.9587,-3.8602 -2.6882,-1.3439 -0.147,-3.4446 -2.0697,-1.9983 -2.7451,-0.1642 -2.7099,1.486 -0.8225,-3.0204 -2.5869,-1.9438 -2.9587,-0.5484 -3.4414,0.6707 -1.9127,1.3847 -1.7494,2.669 -2.265,-2.8858 -3.0902,-0.8457 -3.0008,0.2213 -2.4018,1.2134 -1.0914,1.521 -2.2529,0.3812 -2.1375,1.2447 -1.0082,1.8833 -2.5357,0.2937 -1.4259,-0.9872 1.0414,-2.3447 -0.2062,-2.7647 -0.4403,-2.5339 -1.8462,-1.531 -2.6488,-0.9652 -2.0878,0.4688 -1.5069,-2.2059 -1.5907,-1.6066 -3.3989,-1.2642 -4.0814,-0.145 -1.99,1.098 -2.3201,2.6157 -1.062,2.1597 -0.5207,-3.0382 -1.556,-1.2325 -1.9979,-0.3941 -2.3074,-0.7808 -0.2436,-2.0334 -3.6276,2.1909 -1.6375,-2.9587 z" />
                        </g>
                        <g data-position="38" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3518.7256,1295.8996 2.4441,-2.042 h 6.0141 l 7.8935,-6.8381 13.2916,1.1713 3.5387,-3.8227 11.7816,1.256 5.9807,-6.0781 13.681,2.3974 7.2241,-7.3469 14.593,2.0208 -1.1914,7.7294 -10.4722,10.9116 -14.6776,-0.636 -5.8028,6.3881 -13.1616,-0.9367 -5.0501,5.9968 -13.2156,-1.1567 -3.6641,3.7414 -12.5849,-0.4827 -1.3573,-5.6654 z" />
                        </g>
                        <g data-position="39" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3353.0639,1340.1428 85.6531,1.188 2.0991,-2.5163 7.0124,-0.4114 0.8547,-1.6183 6.0745,0.575 1.5197,1.263 6.8171,0.6597 1.5227,2.2687 0.8003,2.2644 -0.03,2.633 2.4031,0.2807 -8.3525,27.6166 -0.084,4.678 -2.3057,2.6851 -0.844,4.1971 0.435,2.6504 -3.9121,-4.1031 -4.5634,-0.256 -4.2771,2.0697 -1.9997,3.5184 -1.6134,4.2881 1.225,2.922 2.9378,1.4341 -3.1261,0.9863 -2.8441,3.6091 0.3414,3.4251 1.4067,3.2527 2.7637,1.947 8.0478,1.3324 c 0.1913,0.054 0.3827,0.1073 0.574,0.161 l 6.5852,0.3713 -0.4184,1.3884 -87.8507,-5.9149 -27.572,-17.9675 z" />
                        </g>
                        <g data-position="40" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3367.9097,1264.9929 -15.5199,74.9463 86.7515,0.7589 1.5764,-2.0883 6.9618,-0.4752 6.2613,-1.3586 1.3315,1.5029 7.4719,0.8101 2.6957,-11.2314 5.3221,-10.1455 5.7201,-9.1562 5.8601,-9.7589 6.9202,-7.4748 6.6848,-7.1761 6.8168,-10.7249 z" />
                        </g>
                        <g data-position="42" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3380.487,1184.0002 17.3028,-74.0959 7.3899,-5.4524 12.3585,-0.7099 86.5997,2.2571 7.8877,3.6148 1.4897,18.4295 -4.2852,40.4614 -9.7234,26.4586 -15.9724,6.0077 -93.3937,-5.9276 -5.4986,-4.5868 z" />
                        </g>
                    </g>
                    <g data-geo="4" className="map_geo">
                        <text x="3729.2365" y="1158.2901" fontFamily="Verdana" fontSize="35" fill="blue">{t('map.cottage')}</text>
                        <path
                            d="m 3629.2365,1218.2901 c -15.8969,52.2769 -73.745,248.034 -77.4759,305.6612 -2.9361,45.3494 133.5674,26.0748 208.5869,38.0776 32.5173,-190.4415 53.7685,-243.1355 56.8578,-333.7634 -180.654,-3.3119 51.165,-5.2375 -187.9688,-9.9754 z" />
                        <g data-position="41" className="map_button">
                            <path d="m 2181" />
                            <path
                                d="m 3662.8151,1515.68 -2.8207,-26.3645 5.4194,-50.545 13.2556,-19.6458 0.33,-5.5801 4.4988,-1.3167 1.458,5.1335 61.5386,3.816 0.4833,35.7574 -18.0357,65.576 z" />
                        </g>
                    </g>

                    <g data-position="12" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 765.55346,936.93125 48.58202,-155.42703 9.31137,-4.97059 134.9771,17.56865 8.04986,9.56404 -38.86902,163.30342 -8.08569,5.90587 -149.82286,-27.26846 z" />
                    </g>
                    <g data-position="13" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 643.8634,986.38551 -0.55734,-17.75635 -2.28871,-1.58336 18.20636,-54.41441 37.22073,10.94355 1.02402,6.72013 -2.10937,3.27406 0.004,18.42237 -15.2023,42.0815 z" />
                        <path
                            d="m 669.2419,881.76544 17.39702,-50.02832 39.1441,10.01286 -0.308,7.18881 -1.85604,3.14806 -0.33734,18.54837 -14.92563,41.55349 -35.80871,-6.81147 -1.18335,-19.20304 -3.28007,-0.81469 z" />
                        <path
                            d="m 714.5028,749.6755 38.25676,10.63887 0.0833,7.16081 -1.536,2.98006 0.17067,18.68104 -16.92967,42.79751 -34.93735,-8.15083 -0.61535,-19.28771 -3.45607,-0.68335 0.80402,-3.69141 z" />
                        <path
                            d="m 713.78612,712.15142 24.07114,-56.87579 56.47712,4.44875 0.87468,6.6068 -2.17337,3.40673 0.96735,25.54251 -27.22521,59.99119 -49.45097,-9.34019 -0.46601,-30.33727 -3.43207,-0.0833 z" />
                    </g>
                    <g data-position="14" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 566.88721,812.50674 15.56564,-39.49278 -0.28,-33.83534 4.81609,-1.66803 1.18136,7.00414 5.34011,1.7187 12.53091,-30.18727 6.01479,-3.94274 70.12005,16.31899 0.084,6.65613 -35.45537,97.8126 -5.51211,2.90139 -10.70421,0.36668 -60.68786,-17.88569 z" />
                        <path
                            d="m 515.74887,933.10379 v 0.83868 l 13.99494,-36.05538 0.50668,-34.29401 4.15741,-0.34134 0.81469,6.17346 5.48144,0.34134 13.6096,-29.88059 5.01877,-3.07206 69.27737,16.46565 5.1921,6.27346 -37.90075,97.97527 -7.07481,4.7201 -8.3975,-1.13069 -62.94924,-19.04571 z" />
                    </g>
                    <g data-position="15" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 387.94367,902.95919 14.29895,6.4028 14.17228,-5.42011 14.22028,-10.40154 5.05877,-4.43875 12.61625,9.58952 17.16701,-1.67603 11.64289,-6.70414 2.59072,-11.63356 -10.84421,-8.71751 10.68821,-1.60936 0.49334,-15.35897 -9.31085,-0.90535 -5.15943,-11.8649 -19.42772,-7.46548 -21.9671,19.61372 -22.13377,-7.98216 -11.47823,19.37305 1.53603,1.63203 0.22134,25.36917 z" />
                    </g>
                    <g data-position="16" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 374.43647,758.7585 12.21528,-18.8443 22.07631,-5.82856 26.75745,3.91179 12.75646,23.77623 -2.31653,4.94136 0.88437,31.9826 -17.3254,17.96653 -33.48924,-0.76558 -20.72241,-24.55312 1.70181,-29.23897 z" />
                    </g>
                    {!isItWinterNow() && <g data-position="17" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 233.53748,760.95811 41.02337,-32.70857 12.16531,3.50072 2.6946,-4.58875 10.51724,-5.67393 2.17416,1.42555 -4.60005,19.43451 -14.54972,7.33143 -0.85232,5.38166 -14.88819,7.93012 0.1848,4.91779 -12.96671,6.0803 -20.01718,-6.10481 z" />
                    </g>}
                    <g data-position="18" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 191.85506,905.32295 -0.36958,0.57418 7.64379,-7.16069 9.24685,-3.07006 6.60547,3.95541 12.52558,-4.51942 -0.61935,-6.43079 8.29817,-6.04812 9.25151,-1.87737 8.02349,0.14267 8.0795,2.67805 5.20677,3.58407 -0.72402,5.25744 17.80169,4.48342 8.83884,-4.45009 6.32746,1.5227 5.56211,5.81878 4.50675,5.29611 2.83406,8.4535 -0.51201,4.23675 -1.4167,2.22337 3.81741,7.70682 11.7969,2.42205 5.26611,5.24544 3.37473,9.25285 -19.33505,22.57911 -8.76684,-2.77139 c 0.71214,1.71485 0.40551,1.08169 0.83402,1.93871 l 2.67205,5.86411 -39.70412,15.31297 -5.36944,-8.28949 2.03471,21.34176 -37.90675,-1.76538 -0.18134,-15.06296 -2.94205,3.08339 -34.40869,-18.9137 -4.22741,1.46869 -14.17628,-23.97981 2.23137,-12.29757 6.87681,-2.48672 6.82213,-1.36536 5.16477,-8.31616 -3.3974,-7.27148 z" />
                    </g>
                    <g data-position="19" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 185.51234,1067.0538 28.75857,16.037 20.38506,-17.4784 0.66802,-29.9672 -30.1766,-14.9723 -18.4217,12.9369 z" />
                    </g>
                    <g data-position="20" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 146.89024,1054.2549 20.04973,-17.2051 0.57401,-29.8719 -44.15087,-23.69645 -20.72708,13.91161 1.08602,33.48804 z" />
                    </g>
                    {!isItWinterNow() && <g data-position="21" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 166.7673,692.09036 7.92216,-2.93673 6.34279,-0.83868 3.25673,-1.87071 -0.61468,-4.57342 3.51607,-3.6194 -3.60741,-3.11073 1.78737,-2.94139 4.42809,1.79137 2.00537,-1.34336 5.11477,2.02737 7.05081,-1.02535 7.28614,0.97068 7.93416,2.21604 1.20202,1.5147 3.1934,0.87202 -0.48201,5.47811 -4.74676,8.12016 -8.65617,8.11949 -9.14285,6.8708 -15.1643,5.58278 -15.46431,2.57272 -11.77223,-7.94816 2.46738,-3.03073 2.53339,-1.18402 5.0641,-7.74615 z" />
                        <path
                            d="m 210.34349,708.69002 0.17067,4.50209 -3.84541,6.43279 -3.20739,1.99337 -2.48338,3.2234 11.13422,7.35551 6.36812,-0.0247 10.93955,-2.73338 11.84957,-5.06677 11.56823,-7.48882 9.06751,-9.43885 4.8761,-11.9829 -3.47941,-0.68268 -4.72209,-2.35472 -9.20485,-1.43669 -9.57952,0.18 -3.10873,-1.34069 -4.81676,0.34134 -3.69607,-1.49003 -2.18005,2.72872 4.94077,2.74272 -4.46409,2.10071 -1.33403,3.69207 1.89204,3.20473 -4.20475,2.37672 -4.48675,0.89801 -8.90818,2.10738 z" />
                    </g>}
                    <g data-position="22" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 205.32713,660.14815 34.88179,-28.15189 97.4205,27.93693 -28.33762,28.6761 -6.60357,6.20852 -97.3281,-29.06266 z" />
                    </g>
                    {!isItWinterNow() && <g data-position="23" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 19.93892,652.91006 14.528975,-4.4954 2.082706,-20.13597 4.149385,-3.68457 46.221184,-12.16437 7.013696,3.07928 11.912624,10.076 2.754,15.45577 4.03342,2.28919 1.69426,-7.44551 5.84553,0.72692 1.44819,4.83859 3.98344,1.64712 0.96074,11.85983 2.14965,3.37627 -0.42993,4.72073 -79.787734,27.81436 -28.380999,-31.79215 z" />
                    </g>}
                    <g data-position="24" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 408.48808,658.20369 39.68612,-44.77156 42.43684,14.63763 1.04268,30.19526 -45.79023,56.09578 -45.81424,-18.44703 9.95886,-6.4948 z" />
                    </g>


                    {!isItWinterNow() && <g data-position="43" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 201.05518,340.65213 0.33659,12.02765 20.47916,17.85622 65.91025,-30.87855 5.37318,-12.07574 3.45829,-12.43307 2.04782,-12.08516 -15.56043,2.64274 -12.81491,3.28293 1.75554,-7.33709 0.13483,-8.61556 -3.793,-8.20165 -9.04643,-8.64573 -8.1762,-5.00642 -12.52075,-3.16507 -4.65569,-0.48273 -0.742,-5.51837 -2.73703,-2.53998 -1.72538,1.22285 -0.72409,3.16884 0.1848,3.97496 -17.84962,6.23681 4.87348,5.89079 2.52584,6.50551 1.20681,7.70479 0.48273,8.72964 -1.68954,7.49831 -2.95954,8.14414 -2.12985,3.46395 4.76128,2.70403 8.49771,1.24736 4.9159,0.89757 z" />
                    </g>}
                    {!isItWinterNow() && <g data-position="43" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 3332.1294,145.18792 41.3967,-2.07516 48.9903,-9.19823 20.1473,-12.77343 8.3779,-13.18073 4.3078,-15.495373 -26.3784,-6.313174 -20.5075,0.23005 -8.3921,0.218736 -12.3086,-6.497968 -9.8309,-4.318151 -16.5504,-1.507582 -15.5698,-0.03677 -5.9379,0.695807 1.039,17.754388 -14.4451,0.241364 -12.5424,-0.246078 -1.1503,29.067381 z" />
                    </g>}
                    {!isItWinterNow() && <g data-position="43" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 2822.3754,139.77515 2.2468,16.57114 53.9137,2.1355 32.2023,-0.92208 14.347,-9.01815 15.4463,-14.01136 5.5231,-13.48904 -36.6609,-1.64429 8.2582,-10.53327 5.1121,-15.767851 0.3837,-15.215353 -6.547,-15.266266 -11.6128,-11.900371 -15.4775,-8.190344 -1.0588,-7.039152 -6.4649,-0.476128 1.4217,6.579052 -20.6253,-2.123248 -5.1148,0.724091 4.4765,5.689965 2.3467,8.317626 0.8948,11.292248 -1.0833,10.027915 -3.629,11.485527 -3.6911,6.807216 -9.4462,6.910923 9.5565,6.39992 13.3033,11.63072 -38.4834,-1.4463 z" />
                    </g>}
                    {!isItWinterNow() && <g data-position="43" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 1907.578,66.155391 4.799,13.000651 8.624,11.442156 18.1467,3.746798 36.0669,0.282848 50.0274,-1.157792 30.9351,-3.191472 4.1343,-25.458233 -10.9057,-23.672518 -10.7916,0.710892 1.022,-7.243745 -3.8458,-10.043944 -18.849,0.857031 1.6622,-3.409265 -23.863,0.05845 -1.7678,4.649089 -28.7449,1.719717 -6.5036,16.137439 -27.6494,1.965796 -21.1438,7.132491 z" />
                    </g>}
                    {!isItWinterNow() && <g data-position="43" className="map_button">
                        <path d="m 2181" />
                        <path
                            d="m 311.6355,38.683432 32.02596,28.779236 1.68137,34.264682 -51.20768,18.98304 -77.55087,13.08826 -17.47901,-3.75474 -12.85892,-10.0482 -9.13751,-16.90967 v -6.970806 l 41.00481,-22.229773 3.6334,-13.776272 6.41213,-10.753546 11.32822,-8.956177 16.615,-8.506835 1.36536,-5.757447 6.61346,-4.061414 3.61207,6.698799 13.20027,-3.904077 24.55782,13.358931 -10e-4,4.788095 z" />
                    </g>}
                </svg>
            </div>
            <div className="map-tooltip">
                <h3 className="map-tooltip_title"></h3>
                <div className="map-tooltip_preview"></div>
            </div>
        </div>
    </div>
}

export default Map