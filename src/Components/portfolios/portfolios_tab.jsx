import React from 'react';
import portfolioImg_01 from "../../images/portfolio_1.png"
import portfolioImg_02 from "../../images/portfolio_2.png"
import portfolioImg_03 from "../../images/portfolio_3.png"
import portfolioImg_04 from "../../images/portfolio_4.png"
import portfolioImg_05 from "../../images/portfolio_5.png"
import portfolioImg_06 from "../../images/portfolio_6.png"
import portfolioImg_07 from "../../images/portfolio_7.png"
import portfolioImg_08 from "../../images/portfolio_8.png"
import portfolioImg_09 from "../../images/portfolio_9.png"
import SectionTitle from "../section_title"
import PortfolioItem from "../../SingleFeatures/portfolio_item";

import { Tab , Nav } from "react-bootstrap";
export default function PortfoliosTab() {
    return (
        <div className="deneb_project project_v2 section_padding">
            <div className="container">
                <SectionTitle
                    title="Our Latest Projects"
                    description="In this our company all top projects are listed in which includes web app, mobile and ui/ux designs"
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                    <div className="row">
                        <div className="col-md-12">
                            <Nav className="project_button_2 justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="design">Web Design & Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mobile">Mobile App Development</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="marketing">SEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="mobile">Apps</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 grid_wrapper">
                            <Tab.Content>
                             <Tab.Pane eventKey="all">
                               <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_01}
                                            title="React, Node, MongoDb, Express, block chain"
                                            tag="A true Stablekoinonia with global transparent accountancy
                                            built on inflation-resistant precious metals
                                            Redefine your private equity as a function of cash flow!"
                                            url="https://staging.cqrvault.org/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_02}
                                            title="React, Node, MongoDb, Express"
                                            tag="Rotana star luxury car rental Dubai is fairly and competitive price service. Choose your car from our fleet of luxury vehicles including Ferrari, BMW, Audi, McLaren, Mercedes, Rolls Royce, Porsche, Audi, Range Rover,  Bentley & more.
                                            Clear deposit policy, straight-forward transaction, no hidden fees, and no hidden costs."
                                            url="https://www.rotanastar.ae/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_03}
                                            title="React, Node, MongoDb, Express"
                                            tag="The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of artificial intelligence (AI) have revolutionized the way we drive and maintain our cars."
                                            url="https://otobucks.com/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_04}
                                            title="React, Node, MongoDb, Express"
                                            tag="Futures Abroad Services
                                            From Career Guidance, Profile Building, University Selection, Scholarship Information to Visa Assistance…
                                            We are there with you every step of the way!
                                            Read MoreREGISTER with Us!"
                                            url="https://futuresabroad.com/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_05}
                                            title="React, Node, MongoDb, Express"
                                            tag="Why Choose Repair My Gadget We are a forward thinking IT support company with the mission of innovating and improving the repair industry. We achieve this through our research and repair at micro-component level."
                                            url="https://repairmygadget.co.uk/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_06}
                                            title="React, Node, MongoDb, Express"
                                            tag="Civil Academy Eye Test available at our facility and One STOP Solutions of affordable training packages for New Driving File Opening, Health & Safety, Defensive Driving, Hazmat – DG Transportation, First Aid, Fire Safety, Skills development, Vocational Training programs, etc"
                                            url="https://civil.ae/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_07}
                                            title="React Native, Node, MongoDb, Express"
                                            tag="This web application provides a platform to patients or guardians with an ability to search and appoint caregivers. Caregivers can signup and build their profile. Their data is verified by Admins. Clients can signup, searhc and schedule appointments."
                                            url="https://play.google.com/store/apps/details?id=com.evercare.cgwallet"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_08}
                                            title="Flutter"
                                            tag="Otobucks is a one-stop shop for all your Auto needs. We can help you find a workshop, get spare parts, and even rent or buy a car. You can also take care of your auto insurance and auto loans in one place"
                                            url="https://play.google.com/store/apps/details?id=com.otobucks.app"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_09}
                                            title="React Native, Node, MongoDb, Express"
                                            tag="8rent is Malaysia's new property & tenancy management platform.
                                            Introducing 8rent - Connect with your landlord, pay and review your rent online, and much more!
                                            What else you can do with 8rent Tenant:
                                            FOR TENANT:
                                            1. Keep track of all your payment details.
                                            2. Make your payment online (soon!)"
                                            url="https://play.google.com/store/apps/details?id=com.eightrenttenant"
                                        />
                                   </div>
                               </div>
                             </Tab.Pane>
                            <Tab.Pane eventKey="design">
                               <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_01}
                                            title="React, Node, MongoDb, Express,"
                                            tag="A true Stablekoinonia with global transparent accountancy
                                            built on inflation-resistant precious metals
                                            Redefine your private equity as a function of cash flow!"
                                            url="https://staging.cqrvault.org/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_02}
                                            title="React, Node, MongoDb, Express"
                                            tag="Rotana star luxury car rental Dubai is fairly and competitive price service. Choose your car from our fleet of luxury vehicles including Ferrari, BMW, Audi, McLaren, Mercedes, Rolls Royce, Porsche, Audi, Range Rover,  Bentley & more.
                                            Clear deposit policy, straight-forward transaction, no hidden fees, and no hidden costs."
                                            url="https://www.rotanastar.ae/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_03}
                                            title="React, Node, MongoDb, Express"
                                            tag="The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of artificial intelligence (AI) have revolutionized the way we drive and maintain our cars."
                                            url="https://otobucks.com/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_04}
                                            title="React, Node, MongoDb, Express"
                                            tag="Futures Abroad Services
                                            From Career Guidance, Profile Building, University Selection, Scholarship Information to Visa Assistance…
                                            We are there with you every step of the way!
                                            Read MoreREGISTER with Us!"
                                            url="https://futuresabroad.com/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_05}
                                            title="React, Node, MongoDb, Express"
                                            tag="Why Choose Repair My Gadget We are a forward thinking IT support company with the mission of innovating and improving the repair industry. We achieve this through our research and repair at micro-component level."
                                            url="https://repairmygadget.co.uk/"
                                        />
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            img={portfolioImg_06}
                                            title="React, Node, MongoDb, Express"
                                            tag="Civil Academy Eye Test available at our facility and One STOP Solutions of affordable training packages for New Driving File Opening, Health & Safety, Defensive Driving, Hazmat – DG Transportation, First Aid, Fire Safety, Skills development, Vocational Training programs, etc"
                                            url="https://civil.ae/"
                                        />
                                   </div>
                               </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="mobile">
                              <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_07}
                                        title="React Native, Node, MongoDb, Express"
                                        tag="This web application provides a platform to patients or guardians with an ability to search and appoint caregivers. Caregivers can signup and build their profile. Their data is verified by Admins. Clients can signup, searhc and schedule appointments."
                                        url="https://play.google.com/store/apps/details?id=com.evercare.cgwallet"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_08}
                                        title="Flutter"
                                        tag="Otobucks is a one-stop shop for all your Auto needs. We can help you find a workshop, get spare parts, and even rent or buy a car. You can also take care of your auto insurance and auto loans in one place"
                                        url="https://play.google.com/store/apps/details?id=com.otobucks.app"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <PortfolioItem
                                        img={portfolioImg_09}
                                        title="React Native, Node, MongoDb, Express"
                                        tag="8rent is Malaysia's new property & tenancy management platform.
                                        Introducing 8rent - Connect with your landlord, pay and review your rent online, and much more!
                                        What else you can do with 8rent Tenant:
                                        FOR TENANT:
                                        1. Keep track of all your payment details.
                                        2. Make your payment online (soon!)"
                                        url="https://play.google.com/store/apps/details?id=com.eightrenttenant"
                                    />
                                </div>
                              </div>
                            </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>   
    )
}
