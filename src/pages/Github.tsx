import React from 'react';

const fun() async{

    const { data } = await octokit.request(
        "GET /users/{username}",
        {
            username: "torvalds",
        }
    );
}

const Github: React.FC = () => {


    console.log(data.name);
    return (
        <div>github</div>
    );
};

export default Github;