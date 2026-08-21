

const contests = [
    {
        id : 1,
        title : "codeforces round 1000",
        startTime : "Tomorrow"
    },
    {
        id : 2,
        title : "codeforces round 1001",
        startTime : "Sunday"
    }
]


const blogs = [
    {   
        id : 1 ,
        title : "codeforces round 1000",
        postedBy : "dominator069",
        createdAt : "Yesterday",
        content : "this is the content of first blog",
        upVotes : 10,
        downVotes : 2,
        noOfComments : 1,

    },
    {   
        id : 2 ,
        title : "codeforces round 1001",
        postedBy : "agrawaltanmay17",
        createdAt : "Yesterday",
        content : "this is the content of second blog",
        upVotes : 150,
        downVotes : 11,
        noOfComments : 10,
    }
]



async function getRecentBlogs(){
    return blogs;
}



async function getUpcomingContests(){
    return contests;
}

export {getRecentBlogs, getUpcomingContests}







