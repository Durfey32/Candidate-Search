// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    avatar: string | undefined;
    login: string;
    location?: string;
    company?: string;
    email?: string;
    bio?: string;
    avatar_url?: string;
    html_url?: string;
}
