"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubRepo = exports.GithubProfile = void 0;
exports.GithubProfile = {
    title: "GithubProfile",
    description: "A github profile",
    type: "object",
    properties: {
        login: {
            type: "string",
            description: "The username of the user",
        },
        id: {
            type: "string",
            description: "The id of the user",
        },
        node_id: {
            type: "string",
            description: "The node id of the user",
        },
        avatar_url: {
            type: "string",
            description: "The avatar url of the user",
        },
        gravatar_id: {
            type: "string",
            description: "The gravatar id of the user",
        },
        url: {
            type: "string",
            description: "The url of the user",
        },
        html_url: {
            type: "string",
            description: "The html url of the user",
        },
        followers_url: {
            type: "string",
            description: "The followers url of the user",
        },
        following_url: {
            type: "string",
            description: "The following url of the user",
        },
        gists_url: {
            type: "string",
            description: "The gists url of the user",
        },
        starred_url: {
            type: "string",
            description: "The starred url of the user",
        },
        subscriptions_url: {
            type: "string",
            description: "The starred url of the user",
        },
        organizations_url: {
            type: "string",
            description: "The organizations url of the user",
        },
        repos_url: {
            type: "string",
            description: "The repos url of the user",
        },
        events_url: {
            type: "string",
            description: "The events url of the user",
        },
        received_events_url: {
            type: "string",
            description: "The received events url of the user",
        },
        type: {
            type: "string",
            description: "The type of the user",
        },
        site_admin: {
            type: "boolean",
            description: "Indicates if the user is a site admin",
        },
        name: {
            type: "string",
            description: "The name of the user",
        },
        company: {
            type: "string",
            description: "The company of the user",
        },
        blog: {
            type: "string",
            description: "The blog of the user",
        },
        location: {
            type: "string",
            description: "The location of the user",
        },
        email: {
            type: "string",
            description: "The email of the user",
        },
        hireable: {
            type: "string",
            description: "Indicates whether the user is hireable",
        },
        bio: {
            type: "string",
            description: "The bio of the user",
        },
        twitter_username: {
            type: "string",
            description: "The twitter username of the user",
        },
        public_repos: {
            type: "number",
            description: "The number of public repos for the user",
        },
        public_gists: {
            type: "number",
            description: "The number of public gists for the user",
        },
        followers: {
            type: "number",
            description: "The number of followers for the user",
        },
        following: {
            type: "number",
            description: "The number of following for the user",
        },
        created_at: {
            type: "string",
            description: "Account creation date",
        },
        updated_at: {
            type: "string",
            description: "Account update date",
        },
        private_gists: {
            type: "number",
            description: "The number of private gists for the user",
        },
        total_private_repos: {
            type: "number",
            description: "The number of total repos for the user",
        },
        owned_private_repos: {
            type: "number",
            description: "The number of owned private repos for the user",
        },
        disk_usage: {
            type: "number",
            description: "The user's disk usage",
        },
        collaborators: {
            type: "number",
            description: "The number of collaborators for the user",
        },
        two_factor_authentication: {
            type: "boolean",
            description: "Indicates whether 2FA is required",
        },
    },
};
exports.GithubRepo = {
    title: "GithubRepo",
    description: "A github repo",
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "The id of the repo",
        },
        node_id: {
            type: "string",
            description: "The node id of the repo",
        },
        name: {
            type: "string",
            description: "The name of the repo",
        },
        full_name: {
            type: "string",
            description: "The full name of the repo",
        },
        private: {
            type: "boolean",
            description: "Whether the repo is private",
        },
        owner: {
            title: "GithubProfile",
            description: "A github profile",
            type: "object",
            properties: {
                login: {
                    type: "string",
                    description: "The username of the user",
                },
                id: {
                    type: "string",
                    description: "The id of the user",
                },
                node_id: {
                    type: "string",
                    description: "The node id of the user",
                },
                avatar_url: {
                    type: "string",
                    description: "The avatar url of the user",
                },
                gravatar_id: {
                    type: "string",
                    description: "The gravatar id of the user",
                },
                url: {
                    type: "string",
                    description: "The url of the user",
                },
                html_url: {
                    type: "string",
                    description: "The html url of the user",
                },
                followers_url: {
                    type: "string",
                    description: "The followers url of the user",
                },
                following_url: {
                    type: "string",
                    description: "The following url of the user",
                },
                gists_url: {
                    type: "string",
                    description: "The gists url of the user",
                },
                starred_url: {
                    type: "string",
                    description: "The starred url of the user",
                },
                subscriptions_url: {
                    type: "string",
                    description: "The starred url of the user",
                },
                organizations_url: {
                    type: "string",
                    description: "The organizations url of the user",
                },
                repos_url: {
                    type: "string",
                    description: "The repos url of the user",
                },
                events_url: {
                    type: "string",
                    description: "The events url of the user",
                },
                received_events_url: {
                    type: "string",
                    description: "The received events url of the user",
                },
                type: {
                    type: "string",
                    description: "The type of the user",
                },
                site_admin: {
                    type: "boolean",
                    description: "Indicates if the user is a site admin",
                },
                name: {
                    type: "string",
                    description: "The name of the user",
                },
                company: {
                    type: "string",
                    description: "The company of the user",
                },
                blog: {
                    type: "string",
                    description: "The blog of the user",
                },
                location: {
                    type: "string",
                    description: "The location of the user",
                },
                email: {
                    type: "string",
                    description: "The email of the user",
                },
                hireable: {
                    type: "string",
                    description: "Indicates whether the user is hireable",
                },
                bio: {
                    type: "string",
                    description: "The bio of the user",
                },
                twitter_username: {
                    type: "string",
                    description: "The twitter username of the user",
                },
                public_repos: {
                    type: "number",
                    description: "The number of public repos for the user",
                },
                public_gists: {
                    type: "number",
                    description: "The number of public gists for the user",
                },
                followers: {
                    type: "number",
                    description: "The number of followers for the user",
                },
                following: {
                    type: "number",
                    description: "The number of following for the user",
                },
                created_at: {
                    type: "string",
                    description: "Account creation date",
                },
                updated_at: {
                    type: "string",
                    description: "Account update date",
                },
                private_gists: {
                    type: "number",
                    description: "The number of private gists for the user",
                },
                total_private_repos: {
                    type: "number",
                    description: "The number of total repos for the user",
                },
                owned_private_repos: {
                    type: "number",
                    description: "The number of owned private repos for the user",
                },
                disk_usage: {
                    type: "number",
                    description: "The user's disk usage",
                },
                collaborators: {
                    type: "number",
                    description: "The number of collaborators for the user",
                },
                two_factor_authentication: {
                    type: "boolean",
                    description: "Indicates whether 2FA is required",
                },
            },
        },
        html_url: {
            type: "string",
            description: "The html url of the repo",
        },
        description: {
            type: "string",
            description: "The description of the repo",
        },
        fork: {
            type: "boolean",
            description: "Whether the repo is a fork",
        },
        url: {
            type: "string",
            description: "The url of the repo",
        },
        forks_url: {
            type: "string",
            description: "The forks url of the repo",
        },
        keys_url: {
            type: "string",
            description: "The keys url of the repo",
        },
        collaborators_url: {
            type: "string",
            description: "The collaborators url of the repo",
        },
        teams_url: {
            type: "string",
            description: "The teams url of the repo",
        },
        hooks_url: {
            type: "string",
            description: "The hooks url of the repo",
        },
        issue_events_url: {
            type: "string",
            description: "The issue events url of the repo",
        },
        events_url: {
            type: "string",
            description: "The events url of the repo",
        },
        assignees_url: {
            type: "string",
            description: "The assignees url of the repo",
        },
        branches_url: {
            type: "string",
            description: "The branches url of the repo",
        },
        tags_url: {
            type: "string",
            description: "The tags url of the repo",
        },
        blobs_url: {
            type: "string",
            description: "The blobs url of the repo",
        },
        git_tags_url: {
            type: "string",
            description: "The git tags url of the repo",
        },
        git_refs_url: {
            type: "string",
            description: "The git refs url of the repo",
        },
        trees_url: {
            type: "string",
            description: "The trees url of the repo",
        },
        statuses_url: {
            type: "string",
            description: "The statuses url of the repo",
        },
        languages_url: {
            type: "string",
            description: "The languages url of the repo",
        },
        stargazers_url: {
            type: "string",
            description: "The stargazers url of the repo",
        },
        contributors_url: {
            type: "string",
            description: "The contributors url of the repo",
        },
        subscribers_url: {
            type: "string",
            description: "The subscribers url of the repo",
        },
        subscription_url: {
            type: "string",
            description: "The subscription url of the repo",
        },
        commits_url: {
            type: "string",
            description: "The commits url of the repo",
        },
        git_commits_url: {
            type: "string",
            description: "The git commits url of the repo",
        },
        comments_url: {
            type: "string",
            description: "The comments url of the repo",
        },
        issue_comment_url: {
            type: "string",
            description: "The issue comment url of the repo",
        },
        contents_url: {
            type: "string",
            description: "The contents url of the repo",
        },
        compare_url: {
            type: "string",
            description: "The compare url of the repo",
        },
        merges_url: {
            type: "string",
            description: "The merges url of the repo",
        },
        archive_url: {
            type: "string",
            description: "The archive url of the repo",
        },
        downloads_url: {
            type: "string",
            description: "The downloads url of the repo",
        },
        issues_url: {
            type: "string",
            description: "The issues url of the repo",
        },
        pulls_url: {
            type: "string",
            description: "The pulls url of the repo",
        },
        milestones_url: {
            type: "string",
            description: "The milestones url of the repo",
        },
        notifications_url: {
            type: "string",
            description: "The notifications url of the repo",
        },
        labels_url: {
            type: "string",
            description: "The labels url of the repo",
        },
        releases_url: {
            type: "string",
            description: "The releases url of the repo",
        },
        deployments_url: {
            type: "string",
            description: "The deployments url of the repo",
        },
        created_at: {
            type: "string",
            description: "The creation date of the repo",
        },
        updated_at: {
            type: "string",
            description: "The update date of the repo",
        },
        pushed_at: {
            type: "string",
            description: "The pushed at date of the repo",
        },
        git_url: {
            type: "string",
            description: "The git url of the repo",
        },
        ssh_url: {
            type: "string",
            description: "The ssh url of the repo",
        },
        clone_url: {
            type: "string",
            description: "The clone url of the repo",
        },
        svn_url: {
            type: "string",
            description: "The svn url of the repo",
        },
        homepage: {
            type: "string",
            description: "The homepage of the repo",
        },
        size: {
            type: "number",
            description: "The size of the repo",
        },
        stargazers_count: {
            type: "number",
            description: "The stargazers count of the repo",
        },
        watchers_count: {
            type: "number",
            description: "The watchers count of the repo",
        },
        language: {
            type: "string",
            description: "The language of the repo",
        },
        has_issues: {
            type: "boolean",
            description: "Whether the repo has issues",
        },
        has_projects: {
            type: "boolean",
            description: "Whether the repo has projects",
        },
        has_downloads: {
            type: "boolean",
            description: "Whether the repo has downloads",
        },
        has_wiki: {
            type: "boolean",
            description: "Whether the repo has a wiki",
        },
        has_pages: {
            type: "boolean",
            description: "Whether the repo has pages",
        },
        forks_count: {
            type: "number",
            description: "The forks count of the repo",
        },
        mirror_url: {
            type: "string",
            description: "The mirror url of the repo",
        },
        archived: {
            type: "boolean",
            description: "Whether the repo is archived",
        },
        disabled: {
            type: "boolean",
            description: "Whether the repo is disabled",
        },
        open_issues_count: {
            type: "number",
            description: "The open issues count of the repo",
        },
        license: {
            type: "string",
            description: "The license of the repo",
        },
        allow_forking: {
            type: "boolean",
            description: "Whether the repo allows forking",
        },
        is_template: {
            type: "boolean",
            description: "Whether the repo is a template",
        },
        web_commit_signoff_required: {
            type: "boolean",
            description: "Whether the repo requires web commit signoff",
        },
        topics: {
            type: "array",
            description: "The topics of the repo",
            items: {
                type: "string",
            },
        },
        visibility: {
            type: "string",
            description: "The visibility of the repo",
        },
        default_branch: {
            type: "string",
            description: "The default branch of the repo",
        },
        permissions: {
            title: "GithubProfile",
            description: "A github profile",
            type: "object",
            properties: {
                admin: {
                    type: "boolean",
                    description: "Whether the repo has admin permissions",
                },
                maintain: {
                    type: "boolean",
                    description: "Whether the repo has maintain permissions",
                },
                push: {
                    type: "boolean",
                    description: "Whether the repo has push permissions",
                },
                triage: {
                    type: "boolean",
                    description: "Whether the repo has triage permissions",
                },
                pull: {
                    type: "boolean",
                    description: "Whether the repo has pull permissions",
                },
            },
        },
    },
};
