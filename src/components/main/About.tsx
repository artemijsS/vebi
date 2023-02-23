import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';


const About = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>{t("about.title")}</h1>
                    <div className="blocks reverse">
                        <div className="block f2 b-45-top-left">
                            <div className="about b-30-bottom-right">
                                <h1>{t("about.firstBlock.title")}</h1>
                                <ul>
                                    <li>{t("about.firstBlock.text1")}</li>
                                    <li>{t("about.firstBlock.text2")}</li>
                                    <li>{t("about.firstBlock.text3")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="blocks-reverse">
                            <div className="block-reverse strategy">
                                <div className="strategy-card">
                                    <svg width="301" height="157" viewBox="0 0 301 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2489_3536)">
                                            <path d="M301 101.37H282.496V119.913H301V101.37Z" fill="white"/>
                                            <path d="M301 79.1182H282.496V97.6615H301V79.1182Z" fill="white"/>
                                            <path d="M301 33.3779H282.496V51.9212H301V33.3779Z" fill="#E43071"/>
                                            <path d="M37.3785 119.913L0.123535 33.3779H21.7117L54.2789 110.024H41.5727L74.6334 33.3779H94.4944L57.1162 119.913H37.3785ZM121.319 68.2393H162.892V83.8157H121.319V68.2393ZM122.799 103.842H169.8V119.913H102.938V33.3779H168.196V49.4488H122.799V103.842ZM186.934 119.913V33.3779H229.123C239.979 33.3779 248.12 35.4383 253.548 39.559C259.059 43.6797 261.813 49.1191 261.813 55.8771C261.813 60.41 260.703 64.3659 258.483 67.7449C256.262 71.0415 253.22 73.5963 249.354 75.4094C245.489 77.2226 241.048 78.1291 236.031 78.1291L238.375 73.0606C243.803 73.0606 248.614 73.9671 252.808 75.7803C257.002 77.511 260.252 80.1071 262.554 83.5685C264.939 87.0299 266.131 91.2742 266.131 96.3016C266.131 103.719 263.212 109.529 257.372 113.732C251.534 117.853 242.939 119.913 231.59 119.913H186.934ZM206.795 104.831H230.11C235.291 104.831 239.198 104.007 241.829 102.359C244.543 100.628 245.9 97.9086 245.9 94.2C245.9 90.5738 244.543 87.8952 241.829 86.1645C239.198 84.3514 235.291 83.4449 230.11 83.4449H205.314V68.8575H226.656C231.509 68.8575 235.209 68.0333 237.758 66.385C240.391 64.6543 241.706 62.0582 241.706 58.5968C241.706 55.2179 240.391 52.7041 237.758 51.0559C235.209 49.3252 231.509 48.4598 226.656 48.4598H206.795V104.831Z" fill="white"/>
                                            <path d="M46.8983 150.819V145.08L47.2727 146.095L40.731 135.367H42.471L48.2198 144.794H47.2946L53.0435 135.367H54.6734L48.1316 146.095L48.5061 145.08V150.819H46.8983ZM60.4926 150.929C59.3766 150.929 58.3707 150.679 57.4749 150.178C56.5939 149.664 55.8964 148.965 55.3825 148.082C54.8686 147.184 54.6116 146.162 54.6116 145.014C54.6116 143.852 54.8686 142.828 55.3825 141.945C55.8964 141.063 56.5939 140.372 57.4749 139.871C58.356 139.37 59.3619 139.121 60.4926 139.121C61.6379 139.121 62.6512 139.37 63.5322 139.871C64.4279 140.372 65.1254 141.063 65.6246 141.945C66.1386 142.828 66.3955 143.852 66.3955 145.014C66.3955 146.162 66.1386 147.184 65.6246 148.082C65.1254 148.965 64.4279 149.664 63.5322 150.178C62.6365 150.679 61.6232 150.929 60.4926 150.929ZM60.4926 149.538C61.3296 149.538 62.0711 149.355 62.7172 148.987C63.3633 148.605 63.8698 148.074 64.237 147.397C64.6188 146.706 64.8097 145.911 64.8097 145.014C64.8097 144.101 64.6188 143.306 64.237 142.63C63.8698 141.953 63.3633 141.431 62.7172 141.063C62.0711 140.681 61.3369 140.489 60.5146 140.489C59.6922 140.489 58.9581 140.681 58.312 141.063C57.6659 141.431 57.152 141.953 56.7702 142.63C56.3884 143.306 56.1975 144.101 56.1975 145.014C56.1975 145.911 56.3884 146.706 56.7702 147.397C57.152 148.074 57.6659 148.605 58.312 148.987C58.9581 149.355 59.685 149.538 60.4926 149.538ZM74.5882 150.929C73.6044 150.929 72.7454 150.745 72.0112 150.378C71.2769 150.009 70.7043 149.458 70.2931 148.722C69.8966 147.987 69.6984 147.067 69.6984 145.963V139.231H71.2622V145.786C71.2622 147.022 71.5634 147.957 72.1654 148.59C72.782 149.208 73.6411 149.517 74.7424 149.517C75.55 149.517 76.2475 149.355 76.8349 149.031C77.4369 148.693 77.8921 148.207 78.2005 147.574C78.5235 146.941 78.6851 146.183 78.6851 145.3V139.231H80.2489V150.819H78.7511V147.641L78.9934 148.214C78.6264 149.068 78.0536 149.737 77.2754 150.223C76.5118 150.694 75.6161 150.929 74.5882 150.929ZM84.8276 150.819V139.231H86.3253V142.387L86.1711 141.835C86.4942 140.953 87.0375 140.283 87.8011 139.826C88.5647 139.355 89.5117 139.121 90.6424 139.121V140.644C90.5837 140.644 90.525 140.644 90.4663 140.644C90.4074 140.629 90.3487 140.621 90.29 140.621C89.0712 140.621 88.1168 140.997 87.4267 141.747C86.7365 142.483 86.3914 143.535 86.3914 144.904V150.819H84.8276ZM192.192 150.819V139.231H193.755V150.819H192.192ZM192.984 136.67C192.662 136.67 192.389 136.56 192.17 136.339C191.949 136.119 191.839 135.853 191.839 135.544C191.839 135.235 191.949 134.978 192.17 134.771C192.389 134.551 192.662 134.441 192.984 134.441C193.307 134.441 193.58 134.544 193.799 134.75C194.02 134.956 194.13 135.214 194.13 135.522C194.13 135.846 194.02 136.119 193.799 136.339C193.593 136.56 193.322 136.67 192.984 136.67ZM201.433 150.929C200.478 150.929 199.575 150.797 198.724 150.532C197.872 150.253 197.204 149.907 196.719 149.495L197.424 148.259C197.894 148.611 198.496 148.92 199.23 149.186C199.964 149.436 200.735 149.56 201.543 149.56C202.644 149.56 203.438 149.391 203.921 149.054C204.406 148.7 204.649 148.236 204.649 147.663C204.649 147.236 204.51 146.905 204.23 146.669C203.966 146.419 203.613 146.235 203.172 146.118C202.732 145.985 202.24 145.874 201.697 145.786C201.154 145.698 200.61 145.595 200.067 145.477C199.538 145.36 199.053 145.19 198.613 144.969C198.173 144.734 197.814 144.418 197.534 144.021C197.27 143.623 197.138 143.094 197.138 142.431C197.138 141.798 197.314 141.232 197.667 140.731C198.018 140.232 198.533 139.841 199.208 139.562C199.898 139.268 200.735 139.121 201.719 139.121C202.468 139.121 203.217 139.223 203.966 139.43C204.714 139.621 205.331 139.878 205.816 140.202L205.133 141.459C204.619 141.107 204.068 140.856 203.481 140.709C202.894 140.547 202.306 140.467 201.719 140.467C200.677 140.467 199.906 140.651 199.406 141.018C198.921 141.372 198.68 141.828 198.68 142.387C198.68 142.828 198.812 143.174 199.076 143.425C199.354 143.675 199.715 143.874 200.155 144.021C200.61 144.153 201.102 144.263 201.63 144.351C202.174 144.44 202.71 144.55 203.239 144.682C203.782 144.801 204.274 144.969 204.714 145.19C205.17 145.397 205.53 145.698 205.794 146.095C206.073 146.478 206.212 146.985 206.212 147.618C206.212 148.296 206.022 148.884 205.64 149.384C205.273 149.869 204.729 150.253 204.01 150.532C203.304 150.797 202.446 150.929 201.433 150.929ZM220.001 150.929C218.885 150.929 217.879 150.679 216.983 150.178C216.102 149.664 215.405 148.965 214.89 148.082C214.377 147.184 214.119 146.162 214.119 145.014C214.119 143.852 214.377 142.828 214.89 141.945C215.405 141.063 216.102 140.372 216.983 139.871C217.865 139.37 218.87 139.121 220.001 139.121C221.146 139.121 222.159 139.37 223.041 139.871C223.936 140.372 224.633 141.063 225.133 141.945C225.646 142.828 225.904 143.852 225.904 145.014C225.904 146.162 225.646 147.184 225.133 148.082C224.633 148.965 223.936 149.664 223.041 150.178C222.144 150.679 221.131 150.929 220.001 150.929ZM220.001 149.538C220.838 149.538 221.579 149.355 222.225 148.987C222.872 148.605 223.378 148.074 223.745 147.397C224.126 146.706 224.318 145.911 224.318 145.014C224.318 144.101 224.126 143.306 223.745 142.63C223.378 141.953 222.872 141.431 222.225 141.063C221.579 140.681 220.845 140.489 220.022 140.489C219.201 140.489 218.467 140.681 217.82 141.063C217.174 141.431 216.661 141.953 216.278 142.63C215.897 143.306 215.706 144.101 215.706 145.014C215.706 145.911 215.897 146.706 216.278 147.397C216.661 148.074 217.174 148.605 217.82 148.987C218.467 149.355 219.193 149.538 220.001 149.538ZM234.096 150.929C233.112 150.929 232.253 150.745 231.519 150.378C230.785 150.009 230.212 149.458 229.801 148.722C229.405 147.987 229.206 147.067 229.206 145.963V139.231H230.771V145.786C230.771 147.022 231.072 147.957 231.674 148.59C232.29 149.208 233.149 149.517 234.251 149.517C235.059 149.517 235.756 149.355 236.343 149.031C236.945 148.693 237.4 148.207 237.708 147.574C238.032 146.941 238.193 146.183 238.193 145.3V139.231H239.757V150.819H238.26V147.641L238.502 148.214C238.134 149.068 237.562 149.737 236.783 150.223C236.02 150.694 235.124 150.929 234.096 150.929ZM244.335 150.819V139.231H245.833V142.387L245.679 141.835C246.002 140.953 246.546 140.283 247.31 139.826C248.073 139.355 249.019 139.121 250.151 139.121V140.644C250.091 140.644 250.033 140.644 249.974 140.644C249.916 140.629 249.857 140.621 249.798 140.621C248.579 140.621 247.625 140.997 246.935 141.747C246.245 142.483 245.9 143.535 245.9 144.904V150.819H244.335ZM266.628 150.819V148.259L266.561 147.84V143.557C266.561 142.571 266.283 141.813 265.725 141.284C265.182 140.754 264.367 140.489 263.28 140.489C262.531 140.489 261.819 140.614 261.143 140.864C260.469 141.115 259.895 141.446 259.425 141.857L258.72 140.688C259.308 140.187 260.013 139.804 260.835 139.54C261.658 139.26 262.524 139.121 263.434 139.121C264.932 139.121 266.085 139.495 266.892 140.245C267.715 140.982 268.126 142.107 268.126 143.623V150.819H266.628ZM262.641 150.929C261.775 150.929 261.019 150.789 260.372 150.51C259.741 150.216 259.257 149.819 258.919 149.318C258.581 148.803 258.412 148.214 258.412 147.552C258.412 146.948 258.551 146.404 258.83 145.918C259.124 145.418 259.594 145.021 260.24 144.727C260.902 144.418 261.782 144.263 262.884 144.263H266.87V145.433H262.927C261.812 145.433 261.033 145.632 260.593 146.029C260.167 146.427 259.954 146.92 259.954 147.508C259.954 148.17 260.211 148.7 260.725 149.097C261.24 149.495 261.959 149.693 262.884 149.693C263.765 149.693 264.521 149.495 265.153 149.097C265.799 148.685 266.268 148.097 266.561 147.331L266.914 148.413C266.621 149.178 266.106 149.789 265.372 150.245C264.653 150.701 263.742 150.929 262.641 150.929ZM272.594 150.819V139.231H274.158V150.819H272.594ZM273.387 136.67C273.064 136.67 272.792 136.56 272.571 136.339C272.352 136.119 272.241 135.853 272.241 135.544C272.241 135.235 272.352 134.978 272.571 134.771C272.792 134.551 273.064 134.441 273.387 134.441C273.71 134.441 273.981 134.544 274.201 134.75C274.422 134.956 274.532 135.214 274.532 135.522C274.532 135.846 274.422 136.119 274.201 136.339C273.996 136.56 273.725 136.67 273.387 136.67ZM293.178 139.121C294.118 139.121 294.933 139.305 295.623 139.672C296.328 140.025 296.871 140.569 297.253 141.305C297.649 142.042 297.848 142.969 297.848 144.086V150.819H296.284V144.241C296.284 143.02 295.99 142.1 295.403 141.482C294.831 140.849 294.015 140.534 292.958 140.534C292.165 140.534 291.475 140.702 290.888 141.04C290.314 141.364 289.867 141.843 289.543 142.476C289.235 143.094 289.081 143.844 289.081 144.727V150.819H287.518V144.241C287.518 143.02 287.224 142.1 286.637 141.482C286.049 140.849 285.227 140.534 284.17 140.534C283.391 140.534 282.708 140.702 282.121 141.04C281.534 141.364 281.078 141.843 280.755 142.476C280.447 143.094 280.293 143.844 280.293 144.727V150.819H278.73V139.231H280.227V142.366L279.984 141.813C280.337 140.975 280.902 140.32 281.68 139.849C282.474 139.363 283.406 139.121 284.478 139.121C285.608 139.121 286.57 139.407 287.364 139.981C288.157 140.541 288.67 141.386 288.906 142.52L288.289 142.277C288.626 141.335 289.221 140.577 290.073 140.003C290.939 139.415 291.974 139.121 293.178 139.121Z" fill="white"/>
                                            <path d="M102.979 150.929C102.025 150.929 101.122 150.797 100.27 150.532C99.4183 150.253 98.7502 149.907 98.2656 149.495L98.9704 148.259C99.4403 148.611 100.042 148.92 100.777 149.186C101.511 149.436 102.282 149.56 103.089 149.56C104.191 149.56 104.983 149.391 105.468 149.054C105.953 148.7 106.195 148.236 106.195 147.663C106.195 147.236 106.055 146.905 105.776 146.669C105.512 146.419 105.16 146.235 104.719 146.118C104.279 145.985 103.787 145.874 103.243 145.786C102.7 145.699 102.157 145.595 101.614 145.477C101.085 145.36 100.6 145.19 100.16 144.969C99.7193 144.734 99.3596 144.418 99.0806 144.021C98.8162 143.623 98.6841 143.094 98.6841 142.431C98.6841 141.798 98.8603 141.232 99.2127 140.731C99.5651 140.232 100.079 139.841 100.755 139.562C101.445 139.268 102.282 139.121 103.266 139.121C104.014 139.121 104.763 139.223 105.512 139.43C106.261 139.621 106.878 139.878 107.362 140.202L106.68 141.46C106.166 141.107 105.615 140.856 105.028 140.709C104.44 140.547 103.853 140.467 103.266 140.467C102.223 140.467 101.452 140.651 100.953 141.018C100.468 141.372 100.226 141.828 100.226 142.387C100.226 142.828 100.358 143.174 100.622 143.425C100.901 143.675 101.261 143.874 101.702 144.021C102.157 144.153 102.649 144.263 103.177 144.351C103.721 144.44 104.257 144.55 104.785 144.682C105.329 144.801 105.82 144.969 106.261 145.19C106.716 145.397 107.076 145.699 107.34 146.095C107.619 146.479 107.759 146.985 107.759 147.618C107.759 148.296 107.568 148.884 107.186 149.384C106.819 149.87 106.276 150.253 105.556 150.532C104.851 150.797 103.992 150.929 102.979 150.929ZM115.628 150.929C114.644 150.929 113.786 150.745 113.051 150.378C112.317 150.009 111.744 149.458 111.333 148.722C110.937 147.987 110.738 147.067 110.738 145.963V139.231H112.302V145.786C112.302 147.023 112.603 147.957 113.205 148.59C113.822 149.208 114.681 149.517 115.782 149.517C116.59 149.517 117.288 149.355 117.875 149.031C118.477 148.693 118.932 148.207 119.241 147.574C119.564 146.941 119.725 146.183 119.725 145.3V139.231H121.289V150.819H119.791V147.641L120.033 148.214C119.666 149.068 119.094 149.737 118.315 150.223C117.552 150.694 116.656 150.929 115.628 150.929ZM130.67 150.929C129.524 150.929 128.496 150.679 127.586 150.179C126.69 149.664 125.985 148.965 125.471 148.082C124.957 147.184 124.7 146.162 124.7 145.014C124.7 143.852 124.957 142.828 125.471 141.945C125.985 141.063 126.69 140.372 127.586 139.871C128.496 139.37 129.524 139.121 130.67 139.121C131.653 139.121 132.541 139.312 133.334 139.694C134.128 140.077 134.752 140.651 135.207 141.416L134.039 142.211C133.643 141.621 133.151 141.188 132.563 140.908C131.976 140.629 131.337 140.489 130.648 140.489C129.825 140.489 129.083 140.681 128.422 141.063C127.762 141.431 127.24 141.953 126.859 142.63C126.477 143.306 126.286 144.101 126.286 145.014C126.286 145.926 126.477 146.721 126.859 147.397C127.24 148.075 127.762 148.605 128.422 148.987C129.083 149.355 129.825 149.538 130.648 149.538C131.337 149.538 131.976 149.399 132.563 149.119C133.151 148.84 133.643 148.413 134.039 147.84L135.207 148.633C134.752 149.384 134.128 149.959 133.334 150.355C132.541 150.739 131.653 150.929 130.67 150.929ZM143.107 150.929C141.962 150.929 140.933 150.679 140.023 150.179C139.127 149.664 138.423 148.965 137.909 148.082C137.396 147.184 137.138 146.162 137.138 145.014C137.138 143.852 137.396 142.828 137.909 141.945C138.423 141.063 139.127 140.372 140.023 139.871C140.933 139.37 141.962 139.121 143.107 139.121C144.092 139.121 144.98 139.312 145.773 139.694C146.565 140.077 147.189 140.651 147.644 141.416L146.477 142.211C146.08 141.621 145.589 141.188 145.002 140.908C144.413 140.629 143.776 140.489 143.085 140.489C142.263 140.489 141.521 140.681 140.861 141.063C140.199 141.431 139.679 141.953 139.296 142.63C138.915 143.306 138.724 144.101 138.724 145.014C138.724 145.926 138.915 146.721 139.296 147.397C139.679 148.075 140.199 148.605 140.861 148.987C141.521 149.355 142.263 149.538 143.085 149.538C143.776 149.538 144.413 149.399 145.002 149.119C145.589 148.84 146.08 148.413 146.477 147.84L147.644 148.633C147.189 149.384 146.565 149.959 145.773 150.355C144.98 150.739 144.092 150.929 143.107 150.929ZM155.655 150.929C154.451 150.929 153.394 150.679 152.484 150.179C151.573 149.664 150.86 148.965 150.347 148.082C149.833 147.184 149.576 146.162 149.576 145.014C149.576 143.866 149.818 142.85 150.303 141.968C150.802 141.085 151.477 140.393 152.33 139.893C153.196 139.378 154.165 139.121 155.237 139.121C156.323 139.121 157.285 139.37 158.123 139.871C158.974 140.357 159.642 141.048 160.126 141.945C160.611 142.828 160.854 143.852 160.854 145.014C160.854 145.088 160.846 145.168 160.832 145.257C160.832 145.33 160.832 145.412 160.832 145.499H150.765V144.33H159.994L159.377 144.794C159.377 143.954 159.195 143.211 158.827 142.563C158.474 141.902 157.989 141.387 157.374 141.018C156.757 140.651 156.044 140.467 155.237 140.467C154.444 140.467 153.731 140.651 153.101 141.018C152.469 141.387 151.977 141.902 151.624 142.563C151.272 143.226 151.096 143.984 151.096 144.837V145.08C151.096 145.963 151.287 146.743 151.668 147.419C152.064 148.082 152.608 148.605 153.298 148.987C154.004 149.355 154.803 149.538 155.7 149.538C156.404 149.538 157.058 149.413 157.66 149.164C158.277 148.914 158.805 148.531 159.245 148.015L160.126 149.031C159.613 149.649 158.966 150.12 158.188 150.443C157.424 150.767 156.581 150.929 155.655 150.929ZM167.362 150.929C166.407 150.929 165.504 150.797 164.653 150.532C163.801 150.253 163.133 149.907 162.649 149.495L163.353 148.259C163.823 148.611 164.425 148.92 165.16 149.186C165.894 149.436 166.665 149.56 167.472 149.56C168.574 149.56 169.367 149.391 169.852 149.054C170.335 148.7 170.578 148.236 170.578 147.663C170.578 147.236 170.439 146.905 170.16 146.669C169.895 146.419 169.543 146.235 169.103 146.118C168.661 145.985 168.17 145.874 167.626 145.786C167.083 145.699 166.539 145.595 165.997 145.477C165.469 145.36 164.984 145.19 164.543 144.969C164.102 144.734 163.743 144.418 163.464 144.021C163.199 143.623 163.067 143.094 163.067 142.431C163.067 141.798 163.243 141.232 163.596 140.731C163.949 140.232 164.462 139.841 165.138 139.562C165.828 139.268 166.665 139.121 167.648 139.121C168.397 139.121 169.146 139.223 169.895 139.43C170.644 139.621 171.26 139.878 171.745 140.202L171.063 141.46C170.549 141.107 169.998 140.856 169.411 140.709C168.823 140.547 168.236 140.467 167.648 140.467C166.606 140.467 165.835 140.651 165.335 141.018C164.852 141.372 164.609 141.828 164.609 142.387C164.609 142.828 164.741 143.174 165.006 143.425C165.285 143.675 165.644 143.874 166.084 144.021C166.539 144.153 167.032 144.263 167.561 144.351C168.104 144.44 168.64 144.55 169.168 144.682C169.712 144.801 170.203 144.969 170.644 145.19C171.099 145.397 171.459 145.699 171.723 146.095C172.002 146.479 172.143 146.985 172.143 147.618C172.143 148.296 171.951 148.884 171.569 149.384C171.202 149.87 170.658 150.253 169.939 150.532C169.235 150.797 168.375 150.929 167.362 150.929ZM178.338 150.929C177.383 150.929 176.48 150.797 175.629 150.532C174.776 150.253 174.109 149.907 173.624 149.495L174.328 148.259C174.798 148.611 175.4 148.92 176.134 149.186C176.87 149.436 177.639 149.56 178.447 149.56C179.549 149.56 180.342 149.391 180.826 149.054C181.311 148.7 181.554 148.236 181.554 147.663C181.554 147.236 181.414 146.905 181.134 146.669C180.87 146.419 180.517 146.235 180.077 146.118C179.637 145.985 179.146 145.874 178.602 145.786C178.059 145.699 177.515 145.595 176.972 145.477C176.443 145.36 175.959 145.19 175.518 144.969C175.077 144.734 174.718 144.418 174.439 144.021C174.174 143.623 174.042 143.094 174.042 142.431C174.042 141.798 174.219 141.232 174.571 140.731C174.923 140.232 175.437 139.841 176.112 139.562C176.803 139.268 177.639 139.121 178.624 139.121C179.373 139.121 180.121 139.223 180.87 139.43C181.619 139.621 182.236 139.878 182.721 140.202L182.037 141.46C181.524 141.107 180.973 140.856 180.385 140.709C179.798 140.547 179.211 140.467 178.624 140.467C177.581 140.467 176.81 140.651 176.311 141.018C175.826 141.372 175.584 141.828 175.584 142.387C175.584 142.828 175.716 143.174 175.98 143.425C176.26 143.675 176.619 143.874 177.06 144.021C177.515 144.153 178.007 144.263 178.536 144.351C179.079 144.44 179.614 144.55 180.144 144.682C180.686 144.801 181.179 144.969 181.619 145.19C182.074 145.397 182.434 145.699 182.698 146.095C182.977 146.479 183.117 146.985 183.117 147.618C183.117 148.296 182.927 148.884 182.544 149.384C182.178 149.87 181.634 150.253 180.915 150.532C180.21 150.797 179.35 150.929 178.338 150.929Z" fill="#E43071"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2489_3536">
                                                <rect width="301" height="157" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="block-reverse pink">
                                <div className="hiring-card">
                                    <h2 dangerouslySetInnerHTML={{__html: t('about.thirdBlock.title', {interpolation: {escapeValue: false}})}}/>
                                    <p dangerouslySetInnerHTML={{__html: t('about.thirdBlock.text', {interpolation: {escapeValue: false}})}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default About;