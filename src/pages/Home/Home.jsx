import React from "react";
import PayAttention from "./components/PayAttention/PayAttention";
import UserCard from "./components/UserCard/UserCard";
import TopRated from "./components/TopRated/TopRated";
import TopContributors from "./components/TopContributors/TopContributors";
import FindUser from "./components/FindUser/FindUser";
import BlogDownbar from "./components/BlogDownbar/BlogDownbar";



import "./Home.css"



const blogs_data = [
    {
        heading : "codeforces round",
        time : "13 hours ago",
        user: "username",
        content : "We are happy to invite you to participate in Codeforces Round 1113 (Div. 2), which will be held on Saturday, August 1, 2026 at 20:05UTC+5.5. This round will be rated for all participants with rating below 2100. You will be given 2 hours and 30 minutes to solve 7 problems. The tasks are authored and prepared by Zxc200611, Suwan, FISHER_ and me, szdytom. We are extremely grateful to these wonderful people: satyam343 for their patient and helpful coordination"
    },
    {
        heading : "codeforces round",
        time : "13 hours ago",
        user: "username",
        content : "We are happy to invite you to participate in Codeforces Round 1113 (Div. 2), which will be held on Saturday, August 1, 2026 at 20:05UTC+5.5. This round will be rated for all participants with rating below 2100. You will be given 2 hours and 30 minutes to solve 7 problems. The tasks are authored and prepared by Zxc200611, Suwan, FISHER_ and me, szdytom. We are extremely grateful to these wonderful people: satyam343 for their patient and helpful coordination"
    },
    {
        heading : "codeforces round",
        time : "13 hours ago",
        user: "username",
        content : "We are happy to invite you to participate in Codeforces Round 1113 (Div. 2), which will be held on Saturday, August 1, 2026 at 20:05UTC+5.5. This round will be rated for all participants with rating below 2100. You will be given 2 hours and 30 minutes to solve 7 problems. The tasks are authored and prepared by Zxc200611, Suwan, FISHER_ and me, szdytom. We are extremely grateful to these wonderful people: satyam343 for their patient and helpful coordination"
    },
    {
        heading : "codeforces round",
        time : "13 hours ago",
        user: "username",
        content : "We are happy to invite you to participate in Codeforces Round 1113 (Div. 2), which will be held on Saturday, August 1, 2026 at 20:05UTC+5.5. This round will be rated for all participants with rating below 2100. You will be given 2 hours and 30 minutes to solve 7 problems. The tasks are authored and prepared by Zxc200611, Suwan, FISHER_ and me, szdytom. We are extremely grateful to these wonderful people: satyam343 for their patient and helpful coordination"
    },
]
function Home (){
    return (
        <div className="home">
            <div className="blogs">
                
                    {blogs_data.map((blog) => (
                        <div className="blog">
                            <div className="blog__header">
                                <h2 className = "blog__heading">{blog.heading}</h2>
                                <div className="user">{blog.user}</div>
                                <div className = "time">{blog.time}</div>
                            </div>
                            
                            
                            
                            <div className = "blog__content">{blog.content}</div>
                            <BlogDownbar></BlogDownbar>
                            
                            
                        </div>
                    ))}

                

                
            </div>
            <div className="side__bar">
                <PayAttention></PayAttention>
                <UserCard></UserCard>
                <TopRated></TopRated>
                <TopContributors></TopContributors>
                <FindUser></FindUser>
            </div>
        </div>
    )
}

export default Home;
