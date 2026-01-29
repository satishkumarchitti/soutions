async function getPostWithAuthor(postId) {
    const postRes = await fetch(`/posts/${postId}`);
    const post= await postRes.json();
    const userRes = await fetch(`/user/${post.authorId}`);
    const author= await userRes.json();

    return {...post,author};
    
}