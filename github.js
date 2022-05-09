class Github{
    constructor(){
        this.client_id = '8395c650825cb03f6471';
        this.client_secret = '30959dc56c6de9eca8ecb3c3b7d5fbbbd822e349';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }

    }
}