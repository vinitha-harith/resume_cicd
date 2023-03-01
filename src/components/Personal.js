import React from "react";
import VS from "../images/VS.jpg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Personal = ({ v_count, page_count }) => {
  return (
    <>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-6">So, who am I and what's my story...?(!)</h1>
        <p className="lead mt-4">
          <div>
            <img
              src={VS}
              alt="VS"
              className="rounded mx-auto d-block"
              style={{ maxWidth: "12rem", maxHeight: "16rem" }}
            />
          </div>
          <p className="mt-4 text-center fw-bold">Vinitha Sivaraman</p>
          <p className="mt-4">
            My professional journey began in Chennai, India, as a software
            developer in the ERP domain, which led me to move to the US for a
            short two year stint before another exciting opportunity (again as
            an ERP developer but at a Swiss bank was more attractive!) made me
            make Zurich, Switzerland as my new home!
          </p>
          <p className="mt-4">
            Fast forward several years - Cloud, Big Data Analytics, Data Science
            were the new buzz words and I too wanted to jump onto the cloud
            bandwagon. The closest opportunity I got was to build up BI
            dashboards on SAP Analytics Cloud platform!
          </p>
          <p className="mt-4">
            ... some time later, having upskilled myself, had the opportunity to
            sit through several rounds of interviews with a couple of MAANG
            companies. I finally thought I had hit the home run and landed that
            dream cloud architect job but only to find out that I had messed up
            at one of them by not showcasing enough metrics! I had totally
            underestimated the significance of quantifying my past project
            experiences... (now I try to gather stats on whatever I do,
            including on this site, where down below that are are couple of
            counters to gauge the popularity of this site and some more metrics
            being collected, analysed and visualised behind the scenes! ;o) )
            Anyway, that was a good lesson learnt and I made sure I had all the
            numbers sorted and ready to go for the next set of big tech
            interviews... this time around, the macro-economic situation takes
            the blame... :o| (here's looking at you Sundar Pitchai!)... and the
            journey continues...
          </p>
          <p className="mt-3">
            On a slightly more formal-sounding note, when I'm not working, I
            enjoy spending time with my family, travelling, skiing, and hiking.
            I sincerely believe in giving back to the community and I do my bit
            to support noble causes that contribute to the welfare of the
            environment and the society, back in my home town.
          </p>
          <p className="mt-3">
            Besides that, I love learning new technologies, improving on my
            technical skills, and constantly challenging myself to push the
            boundaries and accomplish more.
          </p>
        </p>
        <Alert variant="dark" className="mt-4">
          <span className="fw-bold">Impressions</span>
          <div>
            <Button variant="dark" className="mt-2 me-3">
              Visitors <Badge bg="secondary">{v_count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button variant="dark" className="mt-2">
              Page Visits <Badge bg="secondary">{page_count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
        </Alert>
        <p className="lead mt-4">Thanks for stopping by!</p>
      </div>
    </>
  );
};

export default Personal;
