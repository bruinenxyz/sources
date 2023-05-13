export declare const GithubProfile: {
    readonly title: "GithubProfile";
    readonly description: "A github profile";
    readonly type: "object";
    readonly properties: {
        readonly login: {
            readonly type: "string";
            readonly description: "The username of the user";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the user";
        };
        readonly node_id: {
            readonly type: "string";
            readonly description: "The node id of the user";
        };
        readonly avatar_url: {
            readonly type: "string";
            readonly description: "The avatar url of the user";
        };
        readonly gravatar_id: {
            readonly type: "string";
            readonly description: "The gravatar id of the user";
        };
        readonly url: {
            readonly type: "string";
            readonly description: "The url of the user";
        };
        readonly html_url: {
            readonly type: "string";
            readonly description: "The html url of the user";
        };
        readonly followers_url: {
            readonly type: "string";
            readonly description: "The followers url of the user";
        };
        readonly following_url: {
            readonly type: "string";
            readonly description: "The following url of the user";
        };
        readonly gists_url: {
            readonly type: "string";
            readonly description: "The gists url of the user";
        };
        readonly starred_url: {
            readonly type: "string";
            readonly description: "The starred url of the user";
        };
        readonly subscriptions_url: {
            readonly type: "string";
            readonly description: "The starred url of the user";
        };
        readonly organizations_url: {
            readonly type: "string";
            readonly description: "The organizations url of the user";
        };
        readonly repos_url: {
            readonly type: "string";
            readonly description: "The repos url of the user";
        };
        readonly events_url: {
            readonly type: "string";
            readonly description: "The events url of the user";
        };
        readonly received_events_url: {
            readonly type: "string";
            readonly description: "The received events url of the user";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the user";
        };
        readonly site_admin: {
            readonly type: "boolean";
            readonly description: "Indicates if the user is a site admin";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the user";
        };
        readonly company: {
            readonly type: "string";
            readonly description: "The company of the user";
        };
        readonly blog: {
            readonly type: "string";
            readonly description: "The blog of the user";
        };
        readonly location: {
            readonly type: "string";
            readonly description: "The location of the user";
        };
        readonly email: {
            readonly type: "string";
            readonly description: "The email of the user";
        };
        readonly hireable: {
            readonly type: "string";
            readonly description: "Indicates whether the user is hireable";
        };
        readonly bio: {
            readonly type: "string";
            readonly description: "The bio of the user";
        };
        readonly twitter_username: {
            readonly type: "string";
            readonly description: "The twitter username of the user";
        };
        readonly public_repos: {
            readonly type: "number";
            readonly description: "The number of public repos for the user";
        };
        readonly public_gists: {
            readonly type: "number";
            readonly description: "The number of public gists for the user";
        };
        readonly followers: {
            readonly type: "number";
            readonly description: "The number of followers for the user";
        };
        readonly following: {
            readonly type: "number";
            readonly description: "The number of following for the user";
        };
        readonly created_at: {
            readonly type: "string";
            readonly description: "Account creation date";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly description: "Account update date";
        };
        readonly private_gists: {
            readonly type: "number";
            readonly description: "The number of private gists for the user";
        };
        readonly total_private_repos: {
            readonly type: "number";
            readonly description: "The number of total repos for the user";
        };
        readonly owned_private_repos: {
            readonly type: "number";
            readonly description: "The number of owned private repos for the user";
        };
        readonly disk_usage: {
            readonly type: "number";
            readonly description: "The user's disk usage";
        };
        readonly collaborators: {
            readonly type: "number";
            readonly description: "The number of collaborators for the user";
        };
        readonly two_factor_authentication: {
            readonly type: "boolean";
            readonly description: "Indicates whether 2FA is required";
        };
    };
};
export declare const GithubRepo: {
    readonly title: "GithubRepo";
    readonly description: "A github repo";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the repo";
        };
        readonly node_id: {
            readonly type: "string";
            readonly description: "The node id of the repo";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the repo";
        };
        readonly full_name: {
            readonly type: "string";
            readonly description: "The full name of the repo";
        };
        readonly private: {
            readonly type: "boolean";
            readonly description: "Whether the repo is private";
        };
        readonly owner: {
            readonly title: "GithubProfile";
            readonly description: "A github profile";
            readonly type: "object";
            readonly properties: {
                readonly login: {
                    readonly type: "string";
                    readonly description: "The username of the user";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "The id of the user";
                };
                readonly node_id: {
                    readonly type: "string";
                    readonly description: "The node id of the user";
                };
                readonly avatar_url: {
                    readonly type: "string";
                    readonly description: "The avatar url of the user";
                };
                readonly gravatar_id: {
                    readonly type: "string";
                    readonly description: "The gravatar id of the user";
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "The url of the user";
                };
                readonly html_url: {
                    readonly type: "string";
                    readonly description: "The html url of the user";
                };
                readonly followers_url: {
                    readonly type: "string";
                    readonly description: "The followers url of the user";
                };
                readonly following_url: {
                    readonly type: "string";
                    readonly description: "The following url of the user";
                };
                readonly gists_url: {
                    readonly type: "string";
                    readonly description: "The gists url of the user";
                };
                readonly starred_url: {
                    readonly type: "string";
                    readonly description: "The starred url of the user";
                };
                readonly subscriptions_url: {
                    readonly type: "string";
                    readonly description: "The starred url of the user";
                };
                readonly organizations_url: {
                    readonly type: "string";
                    readonly description: "The organizations url of the user";
                };
                readonly repos_url: {
                    readonly type: "string";
                    readonly description: "The repos url of the user";
                };
                readonly events_url: {
                    readonly type: "string";
                    readonly description: "The events url of the user";
                };
                readonly received_events_url: {
                    readonly type: "string";
                    readonly description: "The received events url of the user";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the user";
                };
                readonly site_admin: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the user is a site admin";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the user";
                };
                readonly company: {
                    readonly type: "string";
                    readonly description: "The company of the user";
                };
                readonly blog: {
                    readonly type: "string";
                    readonly description: "The blog of the user";
                };
                readonly location: {
                    readonly type: "string";
                    readonly description: "The location of the user";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email of the user";
                };
                readonly hireable: {
                    readonly type: "string";
                    readonly description: "Indicates whether the user is hireable";
                };
                readonly bio: {
                    readonly type: "string";
                    readonly description: "The bio of the user";
                };
                readonly twitter_username: {
                    readonly type: "string";
                    readonly description: "The twitter username of the user";
                };
                readonly public_repos: {
                    readonly type: "number";
                    readonly description: "The number of public repos for the user";
                };
                readonly public_gists: {
                    readonly type: "number";
                    readonly description: "The number of public gists for the user";
                };
                readonly followers: {
                    readonly type: "number";
                    readonly description: "The number of followers for the user";
                };
                readonly following: {
                    readonly type: "number";
                    readonly description: "The number of following for the user";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Account creation date";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Account update date";
                };
                readonly private_gists: {
                    readonly type: "number";
                    readonly description: "The number of private gists for the user";
                };
                readonly total_private_repos: {
                    readonly type: "number";
                    readonly description: "The number of total repos for the user";
                };
                readonly owned_private_repos: {
                    readonly type: "number";
                    readonly description: "The number of owned private repos for the user";
                };
                readonly disk_usage: {
                    readonly type: "number";
                    readonly description: "The user's disk usage";
                };
                readonly collaborators: {
                    readonly type: "number";
                    readonly description: "The number of collaborators for the user";
                };
                readonly two_factor_authentication: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether 2FA is required";
                };
            };
        };
        readonly html_url: {
            readonly type: "string";
            readonly description: "The html url of the repo";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the repo";
        };
        readonly fork: {
            readonly type: "boolean";
            readonly description: "Whether the repo is a fork";
        };
        readonly url: {
            readonly type: "string";
            readonly description: "The url of the repo";
        };
        readonly forks_url: {
            readonly type: "string";
            readonly description: "The forks url of the repo";
        };
        readonly keys_url: {
            readonly type: "string";
            readonly description: "The keys url of the repo";
        };
        readonly collaborators_url: {
            readonly type: "string";
            readonly description: "The collaborators url of the repo";
        };
        readonly teams_url: {
            readonly type: "string";
            readonly description: "The teams url of the repo";
        };
        readonly hooks_url: {
            readonly type: "string";
            readonly description: "The hooks url of the repo";
        };
        readonly issue_events_url: {
            readonly type: "string";
            readonly description: "The issue events url of the repo";
        };
        readonly events_url: {
            readonly type: "string";
            readonly description: "The events url of the repo";
        };
        readonly assignees_url: {
            readonly type: "string";
            readonly description: "The assignees url of the repo";
        };
        readonly branches_url: {
            readonly type: "string";
            readonly description: "The branches url of the repo";
        };
        readonly tags_url: {
            readonly type: "string";
            readonly description: "The tags url of the repo";
        };
        readonly blobs_url: {
            readonly type: "string";
            readonly description: "The blobs url of the repo";
        };
        readonly git_tags_url: {
            readonly type: "string";
            readonly description: "The git tags url of the repo";
        };
        readonly git_refs_url: {
            readonly type: "string";
            readonly description: "The git refs url of the repo";
        };
        readonly trees_url: {
            readonly type: "string";
            readonly description: "The trees url of the repo";
        };
        readonly statuses_url: {
            readonly type: "string";
            readonly description: "The statuses url of the repo";
        };
        readonly languages_url: {
            readonly type: "string";
            readonly description: "The languages url of the repo";
        };
        readonly stargazers_url: {
            readonly type: "string";
            readonly description: "The stargazers url of the repo";
        };
        readonly contributors_url: {
            readonly type: "string";
            readonly description: "The contributors url of the repo";
        };
        readonly subscribers_url: {
            readonly type: "string";
            readonly description: "The subscribers url of the repo";
        };
        readonly subscription_url: {
            readonly type: "string";
            readonly description: "The subscription url of the repo";
        };
        readonly commits_url: {
            readonly type: "string";
            readonly description: "The commits url of the repo";
        };
        readonly git_commits_url: {
            readonly type: "string";
            readonly description: "The git commits url of the repo";
        };
        readonly comments_url: {
            readonly type: "string";
            readonly description: "The comments url of the repo";
        };
        readonly issue_comment_url: {
            readonly type: "string";
            readonly description: "The issue comment url of the repo";
        };
        readonly contents_url: {
            readonly type: "string";
            readonly description: "The contents url of the repo";
        };
        readonly compare_url: {
            readonly type: "string";
            readonly description: "The compare url of the repo";
        };
        readonly merges_url: {
            readonly type: "string";
            readonly description: "The merges url of the repo";
        };
        readonly archive_url: {
            readonly type: "string";
            readonly description: "The archive url of the repo";
        };
        readonly downloads_url: {
            readonly type: "string";
            readonly description: "The downloads url of the repo";
        };
        readonly issues_url: {
            readonly type: "string";
            readonly description: "The issues url of the repo";
        };
        readonly pulls_url: {
            readonly type: "string";
            readonly description: "The pulls url of the repo";
        };
        readonly milestones_url: {
            readonly type: "string";
            readonly description: "The milestones url of the repo";
        };
        readonly notifications_url: {
            readonly type: "string";
            readonly description: "The notifications url of the repo";
        };
        readonly labels_url: {
            readonly type: "string";
            readonly description: "The labels url of the repo";
        };
        readonly releases_url: {
            readonly type: "string";
            readonly description: "The releases url of the repo";
        };
        readonly deployments_url: {
            readonly type: "string";
            readonly description: "The deployments url of the repo";
        };
        readonly created_at: {
            readonly type: "string";
            readonly description: "The creation date of the repo";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly description: "The update date of the repo";
        };
        readonly pushed_at: {
            readonly type: "string";
            readonly description: "The pushed at date of the repo";
        };
        readonly git_url: {
            readonly type: "string";
            readonly description: "The git url of the repo";
        };
        readonly ssh_url: {
            readonly type: "string";
            readonly description: "The ssh url of the repo";
        };
        readonly clone_url: {
            readonly type: "string";
            readonly description: "The clone url of the repo";
        };
        readonly svn_url: {
            readonly type: "string";
            readonly description: "The svn url of the repo";
        };
        readonly homepage: {
            readonly type: "string";
            readonly description: "The homepage of the repo";
        };
        readonly size: {
            readonly type: "number";
            readonly description: "The size of the repo";
        };
        readonly stargazers_count: {
            readonly type: "number";
            readonly description: "The stargazers count of the repo";
        };
        readonly watchers_count: {
            readonly type: "number";
            readonly description: "The watchers count of the repo";
        };
        readonly language: {
            readonly type: "string";
            readonly description: "The language of the repo";
        };
        readonly has_issues: {
            readonly type: "boolean";
            readonly description: "Whether the repo has issues";
        };
        readonly has_projects: {
            readonly type: "boolean";
            readonly description: "Whether the repo has projects";
        };
        readonly has_downloads: {
            readonly type: "boolean";
            readonly description: "Whether the repo has downloads";
        };
        readonly has_wiki: {
            readonly type: "boolean";
            readonly description: "Whether the repo has a wiki";
        };
        readonly has_pages: {
            readonly type: "boolean";
            readonly description: "Whether the repo has pages";
        };
        readonly forks_count: {
            readonly type: "number";
            readonly description: "The forks count of the repo";
        };
        readonly mirror_url: {
            readonly type: "string";
            readonly description: "The mirror url of the repo";
        };
        readonly archived: {
            readonly type: "boolean";
            readonly description: "Whether the repo is archived";
        };
        readonly disabled: {
            readonly type: "boolean";
            readonly description: "Whether the repo is disabled";
        };
        readonly open_issues_count: {
            readonly type: "number";
            readonly description: "The open issues count of the repo";
        };
        readonly license: {
            readonly type: "string";
            readonly description: "The license of the repo";
        };
        readonly allow_forking: {
            readonly type: "boolean";
            readonly description: "Whether the repo allows forking";
        };
        readonly is_template: {
            readonly type: "boolean";
            readonly description: "Whether the repo is a template";
        };
        readonly web_commit_signoff_required: {
            readonly type: "boolean";
            readonly description: "Whether the repo requires web commit signoff";
        };
        readonly topics: {
            readonly type: "array";
            readonly description: "The topics of the repo";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly visibility: {
            readonly type: "string";
            readonly description: "The visibility of the repo";
        };
        readonly default_branch: {
            readonly type: "string";
            readonly description: "The default branch of the repo";
        };
        readonly permissions: {
            readonly title: "GithubProfile";
            readonly description: "A github profile";
            readonly type: "object";
            readonly properties: {
                readonly admin: {
                    readonly type: "boolean";
                    readonly description: "Whether the repo has admin permissions";
                };
                readonly maintain: {
                    readonly type: "boolean";
                    readonly description: "Whether the repo has maintain permissions";
                };
                readonly push: {
                    readonly type: "boolean";
                    readonly description: "Whether the repo has push permissions";
                };
                readonly triage: {
                    readonly type: "boolean";
                    readonly description: "Whether the repo has triage permissions";
                };
                readonly pull: {
                    readonly type: "boolean";
                    readonly description: "Whether the repo has pull permissions";
                };
            };
        };
    };
};
