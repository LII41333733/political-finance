import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import JumboBlogs from "../Components/Jumbotrons/JumboBlogs";
import { useState, useEffect } from "react";

//525x150
export default function Blogs(returnCount) {
    const [articleIndex, setArticleIndex] = useState(-1);
    const articles = [
        {
            title: "The Corona Virus: Your Money or Your Life",
            thumbSrc: `images/articles/coronavirus-thumb.png`,
            src: `images/articles/coronavirus.png`,
            date: `March 26, 2020`,
            body: (<>
                <p>
                    What we are experiencing is a seasonal existential
                    event...relative to our time and the money dimension.
                    The Coronavirus pandemic, whether man made or
                    natural, has revealed the false dichotomy. The leaders in
                    many countries want to get back to “business as usual”
                    pitting the risk of infection and death against economic
                    “disaster.” This conflict has shed new light on the lauded
                    quote by James Carville: “It’s the economy stupid.” Is it?
                    Is that what Americans want and believe to be the acme
                    of freedom and liberty? Let’s look at the term economy.
                    In simple terms it’s derived from, “how’s your house?”
                    Before we answer that we have to answer, “what is our
                    house?” Is the United States of America a democracy, as
                    popularly touted from the public school system to the
                    mainstream news media, is it a republic as once
                    established, is it a commercial corporation, the extension
                    of which mirrors the British or Dutch East Indies
                    companies, run solely for profit where the shareholders
                    are made whole or bailed out every time it goes belly up,
                    or is it either a de facto or de jure empire or colony thereof
                    under the guise of all of the above?
            </p>
                <p>
                    If we are an empire and the population has ceded to that
                    fact with bromides like “well you have to pay the
                    mortgage,” then who is the King or Queen? Is he or she
                    the debt holder, aka the bondholder, of a debt that was
                    contrived from fiat? Have you ever wondered why the
                    United States of America, billed as the most productive and free country in the history of mankind has
                    accumulated a $22 trillion debt and rising? The Federal Reserve wants to play the white knight and infuse more
                    money into the system to provide the ability for Americans to eat, pay their taxes, pay their rents and mortgages
                    and “go back to business as usual.” Can you guess what’s on the other side of that money? If you said “debt,”
                    you can clearly see why the Federal Reserve wants the song to remain the same.
                </p>
                <p>
                    We all want relief. More money – printed money with a debt-basis – does not provide relief. For all you mothers
                    out there, do you want your children to be saddled with more debt? This is the formula that’s been implemented
                    by the oligarchs for over 150 years, before the Federal Reserve. It’s not an American precept. It’s not a Godly
                    precept. Even Alexander Hamilton said, “a national debt, IF NOT EXCESSIVE, will be to us a national blessing.
                    In perspective, this quote was made at the beginning of a country which needed credit. It only took 50 years to
                    pay the debt off, proven by Andrew Jackson. After 250 years, The United States of America, moreover its citizens,
                    has proven that hard work and enterprise “trump” most challenges that have been posed to humanity. So why
                    the debt?
                </p>
            </>),
            footer: ""
        },
        {
            title: "Battleships and Bromides",
            thumbSrc: `images/articles/battleships-thumb.png`,
            src: `images/articles/battleships.png`,
            date: `February 5, 2019`,
            body: (<>
                <h4 className={`textColorPrimary toolsTitle`}>HOW THE WORLD WAS FASHIONED <br /> BY PIN PRICKS</h4>
                <p>
                    <em>
                        And when we were all fallen to the earth, I
                        heard a voice speaking unto me, and saying
                        in the Hebrew tongue, Saul, Saul, why
                        persecutest thou me? it is hard for thee to kick
                        against the pricks.
</em>
                </p>
                <p className="float-right">Acts 26:14</p>
                <p className="clearRight">
                    For those of you who are not familiar
                    with the story, an ox goad was a stick
                    with a pointed piece of iron on its tip
                    used to prod the oxen when plowing. The
                    farmer would prick the animal to steer it
                    in the right direction. Sometimes the
                    animal would rebel by kicking out at the
                    prick, and this would result in the prick
                    being driven even further into its flesh.
                    The following story has a similar lesson.
                    Unfortunately, the pricks were not of the
                    farmer.
                </p>
                <p>
                    Recorded in “Wealth of Nations,” Adam
                    Smith claimed to be a witness of one of
                    the simplest examples of the successful
                    divisions of labor. A pin factory
                    discovered the exponential increase in
                    productivity when the manufacturing of
                    a pin was broken down into 18 separate
                    tasks. “One man draws out the wire,
                    another straights it, a third cuts it, a fourth points it,”etc., and by dividing the labor, twenty men with specialized
                    skills could make an astonishing forty-eight thousand pins in a day. When those 18 operations were performed
                    by one man, Smith claimed that nary a pin was made in a day. Smith also pointed out that the multiplication
                    afforded by this division of labor worked better in manufacturing than agriculture. So if your primary goal is
                    monetary gain, do you enter the arena of agriculture or manufacturing? This was the primary motivation that
                    transformed our country from agriculture to industry, which in itself is not necessarily contemptible. But what
                    happens when markets are saturated?
                </p>
                <p>
                    Looking at the example that Smith provides, a pin factory on the island of Great Britain that produced 48,000
                    pins a day would quickly run out of customers regardless of price – price decreasing with more production and
                    less demand. As Jeff Madrick points out in his article entitled, “How the Invisible Hand Was Corrupted by
                    Laissez-Faire Economics,” the size of the market was every bit as critical as output—and maybe more so—and
                    has usually been overlooked by contemporary economists. The division of labor and other productivity
                    improvements could only be made if the market was large enough. What good would it be to make forty-eight
                    thousand pins rather than two hundred if there was no need for those pins? And so, markets had to expand
                    beyond the village, the region, the nation, and the world. <sup>i</sup>
                </p>
                <p>
                    The next question became, “how does a merchant expand his market?” Naturally he would either travel to
                    foreign lands to sell his pins or hire someone to do it. As he has to supervise his operation, he appropriately
                    hires someone. So, the salesman travels to the foreign land. But in doing so he is met with resistance and turned
                    away with no opportunity to sell. Upon his return and report to the factory owner, the proprietor is outraged.
                    Faced with this challenge and the will to survive (the self-interest that Smith posited was the marrow of wealth)
                    he turns to his government and relates the problem. The government, having an interest in the revenues from
                    the manufacture of pins is motivated to become involved at the behest of the manufacturer. At this, Great Britain
                    deploys ships of the finest Navy ever assembled. The ships either bombard the land to secure access for the
                    salesman or secure it by mere presence and intimidation. The salesman proceeds to the local markets and finds
                    that the people in the foreign land do not want the pins or have no need for them. Upon his return to the factory,
                    the owner is perplexed by “these stupid, parochial, provincial, simple, uneducated, uncivilized, and backward
                    people. They don’t realize how these pins can help their lives.”
                </p>
                <p>
                    Once the battleships provided security for the pin merchant, the real bombardment ensued. The bombardment
                    of bromides, not only by salesmen in the markets but by sermons, presses, speeches by government officials,
                    and eventually institutions of higher learning (universities). And as an entire culture was captivated, in the end
                    it was a very visible hand that guided the market, followed by promises and platitudes of the factory owner.
                    With the cultural change came new customers, new workers, and a new “civilization.”
                </p>
                <p>
                    But the factory owner and the governments were not satisfied. The factory owner found it too costly to
                    manufacture the pins in Great Britain and ship them to the new land. With the same military might from the
                    motherland, the factory owner acquired property in his new territory and built a factory. As all the arable land
                    was exhausted, the inhabitants had no way of sustaining themselves lest they work in the factory for wages. The
                    land, which provided a year’s worth of sustenance in only eight months of toil or less, was exchanged for twelve
                    months of toil and the permission to sustain oneself on day to day basis, as long as one showed up for work,
                    stayed in line, and made his quota.
                </p>
            </>),
            footer: (
                <p><sup>i</sup> Madrick, Jeff.“How the Invisible Hand Was Corrupted by Laissez- Faire Economics.” <em>Evonomics</em>, 3 May 2018</p>
            )
        },
        {
            title: "Impeach King Trump",
            thumbSrc: `images/articles/trump-thumb.png`,
            src: `images/articles/trump.png`,
            date: `March 12, 2019`,
            body: (<>
                <p>
                    For three years we have heard calls for the impeachment of President Trump for any number of alleged infractions; Russian collusion, bribing porn stars, or just being an embarrassment to America. If we measure the present against history, a practice we should all become accustomed to, we should look at of those same calls pointed at other presidents. In the graphic above by the famous Harper’s Weekly, a publication with a Republican slant, the 1866 cartoon by Thomas Nast identifies Democratic President Andrew Johnson as King Andy I. In 1833 another cartoonist gave the same moniker to Andrew Jackson, an even stronger-willed Democratic President.</p>
                <p>
                    According to David O. Stewart, author of, “Impeached: The Trial of Andrew Johnson and the Fight for Lincoln’s Legacy,” Johnson was an official with a good resume but wasn’t necessarily one you could warm up to. He wasn’t known for using humor like his witty predecessor. Even fellow Democrat, James Polk once described him as vindictive and perverse.</p>
                <p>
                    In 1866, with the social climate changin
                        , things were tense in the South. Johnson was noted for saying that the country’s greatest risk was that enfranchised blacks were going to “Africanize the South.” In addition to these cultural and racial differences, Johnson exercised vetoes of the Civil Rights Act and Reconstruction laws that Congress overrode, but blacks, white sympathizers (“scalawags”) and military personnel were still at risk. Other political confrontations came from the Republicans who were considered “radical.” They didn’t want the Democrats – who, with all of their misgivings, were the conservatives of the period – to re-establish dominance or participation in government. During the war and shortly after the Republicans passed a raft of radical monetary policy ex parte in order to maintain the superiority of the banks and the bondholders - many of them foreign. In doing so they proclaimed the sanctity of the “credit of the United States.” With Johnson in the presidency, the battle of supremacy between Congress and the executive crept up again; a similar battle that Jackson had forty years prior with the Second Bank of the United States and Congress.</p>
                <p>
                    Stewart cites the main battle that led to Johnson’s impeachment was between Johnson and Secretary of War, Edwin Stanton who usurped Johnson’s authority when it came to military execution of the Reconstruction laws. In turn, Johnson wanted to replace Stanton. Since the Constitution wasn’t explicit about cabinet dismissals, the
                        Republican Congress conveniently created the Tenure of Office Act that required Congress to approve the president’s cabinet members and such firings. Regardless, Johnson appointed Lorenzo Thomas to the post in which Stanton and Thomas bickered back and forth as to who was the actual Secretary. While Thomas attended cabinet meetings, Stanton occupied the War Department offices for three months. In anticipation of staying longer, Stanton sent a sergeant to his home for food clothes and bed linens. Mrs. Stanton refused the request and nstructed the sergeant to tell her husband to resign immediately and come straight home.</p>
                <p>
                    Johnson, who was eventually impeached, somehow survived by getting seven of the 19 votes needed for acquittal from the adversarial party. Stewart cites five reasons Johnson was able to get the seven votes. Among them were, dislike for Johnson’s would be successor, patience on the side of Republicans who knew Grant was soon to be the next president in 1868, and of course something else that’s not discussed in polite society, patronage and cash bribes.<sup>i</sup></p>
                <p>
                    The reconcilable challenges to 21<sup>st</sup>-century partisans bearing this history are, for Republicans, acknowledging that their party was once the radical or liberal party that espoused early globalism through monetary and fiscal policy, and for Democrats, that their party leaned toward white supremacy but held to fiscal conservatism. Both Kings, both Andrews, both Democrats, both conservatives, went head to head with the bank party and Congress. Both were criticized and demonized by the liberal press. There was one other famous impeachment hearing of a Democratic president (Bill Clinton) but that’s another story entirely. President Trump appears to be experiencing the same in his fight with Congress and the “swamp.” As Americans, we have to ask if Congress is truly representative of the “people.” Many Americans don’t seem to think so, unless our definition of “people” is inaccurate. In attempting to stop this spin – what we do here at NJRedpill.com – we have to ask ourselves, if Congress is still the bank party – supporting Wall Street, the Federal Reserve, the European Central Bank, etc., - regardless of nominal designations, do we want President Trump impeached? Or is it all what Bigdawg calls, “Kabuki Theater?”</p></>
            ),
            footer: (
                <p><sup>i</sup> Stewart, David O. “Impeached.” The Old Baldy Civil War Round Table. Camden County College, Blackwood, NJ. Oct. 12, 2017.</p>
            )
        },
        {
            title: `The \"Evolving Vise\" of the Command Economy`,
            thumbSrc: `images/articles/vise-thumb.png`,
            src: `images/articles/vise.png`,
            date: "March 30, 2020",
            body: (<>
                <p>
                    As mentioned in the promotions for The Art of Political Finance Part I and II, the artists of the 19<sup>th</sup>-century had a
                    sharp eye for the conditions of the period. Below is an illustration which appears to be signed by William Rogers
                    of Harper’s Weekly. It depicts
                    the condition of an employee
                    who worked at the Pullman
                    Palace Car Company and lived
                    in the town of Pullman,
                    Illinois, both owned by George
                    Pullman. The image is the
                    progenitor of two other
                    illustrations I took the liberty
                    of modifying to show the
                    different stages of a command
                    economy. There are fine lines
                    between capitalism, socialism,
                    and free market. Some of the
                    characteristics of each are
                    shown on the plates of the
                    economic vises.
                </p>
                <p>
                    The second image, shown
                    below, was modified to reflect
                    the pressure that railroad
                    owners, also known
                    euphemistically as “managers,” like JP Morgan and Jay Gould had on farmers due to the high prices of
                    transportation resulting from cartelization. In the late 19th century railroads became so prolific, partly due to the
                    hard work and productivity of Americans, that the cost of a rail ticket was declining based on the NATURAL
                    LAW of price = supply + demand. Railroad owners didn’t accept this law, so they entered into agreements to
                    consolidate roads and set prices. This of course was business as usual for industrial capitalists who made their
                    own rules. Rather than create legislation that prohibited these agreements and trusts, most government officials
                    participated via subsidizing these roads. This stance was in direct opposition to the laissez-faire approach to
                    which many of us were indoctrinated. Officials clearly sided with the consolidated capital donor class through
                    the labor disputes of the 19th century.
                </p>
                <img className={"float-left"} src="images/articles/vise2.png" />
                <p>
                    So far, the free-market system
                    seems to bring the most
                    fairness to the masses over any
                    other economic system that
                    has been defined by economic
                    pundits of the modern era and
                    imposed by bureaucrats.
                    Having not studied any one
                    economist in depth, we can get
                    an idea from a few of the
                    better-known economists at
                    the cursory level: Adam
                    Smith, Karl Marx, Ludwig von
                    Mises, John Kenneth
                    Galbraith, Milton Friedman,
                    John Maynard Keynes, and
                    others. They all have one thing
                    in common, they are all
                    theorists who spend their time
                    in the laboratory. Marx and others did infuse practicality, but the socialism that emerged was far from ideal or practical. The lab is not
                    necessarily a bad thing, but as a teacher if you don’t take feedback from your practitioners or those outside of
                    the laboratory you may fall victim to hubris.
                </p>
                <p>This brings me to a real example regarding the invention of the chronometer, the Royal Society, and a man
                named John Harrison. John Harrison was a self-educated English carpenter and clockmaker who invented the
                marine chronometer. In an attempt to eliminate or reduce losses at sea due to navigational errors, the Royal
                Society had officially invited proposals to solve the problem of calculating longitude while at sea. Harrison's
                solution revolutionized navigation and greatly increased the safety of long-distance sea travel. However, since
                he was a commoner, or someone not affiliated with the Royal Society or the Universities, he had difficulty getting
                full recognition and remunerated for his invention, which was part of the promise and incentive made by the
Royal Society.</p>
                <p>
                    This leads us to the dialectic of economists. Was there ever a free market? Let’s assume for argument’s sake that
                    Adam Smith was a proponent of the free market (the thesis) and Karl Marx was a proponent of socialism (the
                    antithesis). Since the free market did not reign in monopoly, calls for fairness, true free markets, and socialism
                    grew. The graphic of the dialectic may look something like this today:
                </p>
                <img className={"d-block mx-auto"} src="images/articles/vise3.png" />
                <p>
                    As you can see from the illustration above, part of the plates of the vise that humanity feels is due to the central
                    command of both the thesis and the antithesis; the resulting vise shown below.

                    Centrally controlled
                    economies were not a
                    characteristic of a free
                    society. This was a
                    characteristic of a
                    command economy
                    associated with the 20<sup>th</sup>-century Soviet Union
                    and its unilateral
                    Communist Party. As
                    the bipartisan system
                    seems to apply equal
                    pressure, what does it
                    say about the current
                    condition in the United
                    States of America? This
                    brings to mind a quote
                    from one of our less poular presidents.
                </p>
                <img className={"float-left"} src="images/articles/vise4.png" />
                <p>
                    <em>The federal government will find its agency most conducive to the security
                    and happiness of the people when limited to the exercise of its conceded
                    powers. In never assuming, even in well-meant object, such powers as
                    were not designed to be conferred upon it, we shall in reality do most for
the general welfare.</em></p>
                <p className="float-right"><em>Martin Van Buren 1837</em></p>
            </>
            )
        }
    ];

    useEffect(() => {
        setArticleIndex(3);
    }, [returnCount]);

    const RenderArticles = ({ articles }) => {
        return articles.map((a, i) => {
            const { thumbSrc, title, date } = a;
            return <div
                onClick={() => setArticleIndex(i)}
                key={i}
                className="articleCard hoverZoom cursor m-2"
                style={{
                    backgroundImage: `url(${thumbSrc})`,
                    backgroundSize: `cover`
                }}>
                <div className={"mb-2 px-2 articleCardInfo"}>
                    <div className="articleCardItem articleCardDetails">{`Bill Pacello ● ${date}`}</div>
                    <div className="articleCardItem articleCardTitle">{title}</div>
                </div>
            </div>

        })
    }

    const DisplayArticle = ({ articles, articleIndex }) => {
        const article = articles[articleIndex];
        const { title, date, body, footer } = article;
        return (
            <div className="slimContain articlesContainer">
                <h2 className="textColorPrimary toolsTitle textCenter">{title.toUpperCase()}</h2>
                <div style={{ height: "50px" }}>
                    <p className={"d-inline mr-2 float-right"}>Bill Pacello</p><p className={"d-inline mr-5 float-right"}>{date}</p>
                </div>
                <div>
                    <img
                        className={"articleImg"}
                        src={article.src} />
                    {body}
                    {footer && <div className={"footerDash mt-5 mb-1"}></div>}
                    {footer}
                </div>
            </div>
        )
    }

    const resetWindow = () => {
        window.scrollTo({ top: 200, behavior: "smooth" });
    }

    const articleSelected = articleIndex > -1;

    return (
        <div>
            <JumboBlogs />
            <Container className={`container-body textLeft mb-5`}>
                {/* {articleIndex > -1 &&
                    <div
                        className="backBtnCircle cursor"
                        onClick={() => setArticleIndex(-1)}>
                        <span className="backArrow">↩</span>
                    </div>} */}
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={articles} />
                </Row>
                <hr className="hr0" />
                <hr className="hr1" />
                <div
                    className="upBtnCircle cursor"
                    onClick={() => resetWindow()}>
                    <span className="upArrow">↑</span>
                </div>
                <Row>
                    {articleSelected &&
                        <DisplayArticle
                            articles={articles}
                            articleIndex={articleIndex} />}
                </Row>
            </Container>
        </div>
    )
}