import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getRepos } from "../redux/actions";
import Loader from "../components/UI/Loader";

const AboutUs = () => {
    const [persian, setPersian] = useState(false);
    const { user, repos, loading } = useSelector((state) => state);
    const {
        avatar_url,
        hireable,
        login,
    } = user;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser("sphr-m37"));
        dispatch(getRepos("sphr-m37", 20));
        // eslint-disable-next-line
    }, []);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="container">
                    <div className="user-identify-info about-me">
                        <div className="user-info-left">
                            <img src={avatar_url} alt={avatar_url} />
                            <span>{login}</span>
                        </div>

                        <div className="user-info-right ">
                            {hireable && <span>hireable</span>}
                            {persian ? (
                                <section className="persian">
                                    <div className="language">
                                        <label htmlFor="language">translate</label>
                                        <input
                                            value={persian}
                                            id="language"
                                            type="checkbox"
                                            onChange={(e) => setPersian(e.target.checked)}
                                        />
                                    </div>

                                    <h3>درباره ی من</h3>
                                    <p>با سلام.من سپهر هستم</p>
                                    <p>
                                        حدودا یک سال است در زمینه ی فرانت اند از طریق کلاسهای حضوری
                                        در حال یادگیری وتمرین هستم و درحال حاضر قادر به کار با
                                        <br />
                                        html , css , bootstrap,tailwind ,javascript ,react <br />
                                        هستم و البته همچنان درحال یادگیری و بروزرسانی دانش خود هستم
                                        و درحال حاضر نیاز به یک فرصت شغلی به عنوان فرانت اند دولوپر
                                        مبتدی جهت ارتقای مهارت و افزایش تجربه ی خود هستم
                                        <br />
                                        ضمنا یادگیری کتابخانه هایی از جمله <br />
                                        veu-js ,ant-design , material UI <br /> در اولویت برنامه های
                                        یادگیری من هستند
                                    </p>
                                </section>
                            ) : (
                                <section className="english">
                                    <div className="language">
                                        <label htmlFor="language">ترجمه</label>
                                        <input
                                            value={persian}
                                            id="language"
                                            type="checkbox"
                                            onChange={(e) => setPersian(e.target.checked)}
                                        />
                                    </div>
                                    <h3> about me</h3>
                                    <p>Hello, my name is Sphar.</p>
                                    <p>
                                        I have been learning and practicing front-end development
                                        for about a year now through in-person classes. I am
                                        currently able to work with HTML, CSS, Bootstrap, Tailwind,
                                        JavaScript, and React. I am still learning and updating my
                                        skills, and I am currently looking for an entry-level
                                        front-end developer job to enhance my skills and gain more
                                        experience.
                                        <br />
                                        also learning libraries such as Vue.js, Ant Design, and
                                        Material UI are among my top learning priorities.
                                    </p>
                                </section>
                            )}
                        </div>
                    </div>
                    <div className="skills">
                        <section className="about-my-skills">
                            <h2>my skills</h2>
                            <div className="container">
                                <div className="skill">
                                    <p>HTML</p>
                                    <div className="box">
                                        <div className="chart w90"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>css</p>
                                    <div className="box">
                                        <div className="chart w90"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>bootstrap</p>
                                    <div className="box">
                                        <div className="chart w70"></div>
                                    </div>
                                    <div className="skill">
                                        <p>java script</p>
                                        <div className="box">
                                            <div className="chart w70"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>react</p>
                                    <div className="box">
                                        <div className="chart w60"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>git & github</p>
                                    <div className="box">
                                        <div className="chart w70"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>work with API (CRUD)</p>
                                    <div className="box">
                                        <div className="chart w90"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>tailwind css</p>
                                    <div className="box">
                                        <div className="chart w30"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>ant-design</p>
                                    <div className="box">
                                        <div className="chart"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>material UI</p>
                                    <div className="box">
                                        <div className="chart"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>vue js</p>
                                    <div className="box">
                                        <div className="chart"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="my-repos">
                        <h2>my repsitories on github</h2>
                        {repos.map((repo, index) => (
                            <a href={repo.html_url} rel="noreferrer" target="_blank" key={index}>
                                {repo.html_url}
                            </a>
                        ))}
                    </section>
                    <section>contact me</section>
                </div>
            )}
        </>
    );
};

export default AboutUs;
