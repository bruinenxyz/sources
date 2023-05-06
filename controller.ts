/* eslint-disable */
// @ts-nocheck

import { Controller, UseGuards, UseInterceptors } from "@nestjs/common";
import { github } from "./sources/github";
import { Controller, Get, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { AccountService } from "./account/account.service";
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from "./account/account.service";
import axios from "axios";

@Controller("github")
@UseInterceptors(ClientPolicyCheck, UserPolicyCheck, TrackUsage)
@ApiTags("sources")
@UseGuards(AuthGuard("custom"))
export class githubController {
  source: github;
  constructor(private accountService: AccountService) {
    this.source = new github();
  }
  @Get("repos")
  @ApiQuery({"schema":{}})
  @ApiResponse({"schema":{"title":"GithubRepo","description":"A github repo","type":"object","properties":{"id":{"type":"string","description":"The id of the repo"},"node_id":{"type":"string","description":"The node id of the repo"},"name":{"type":"string","description":"The name of the repo"},"full_name":{"type":"string","description":"The full name of the repo"},"private":{"type":"boolean","description":"Whether the repo is private"}}}})
  repos(@Query() query, @AuthenticatedClient() httpClient): Promise<any> {
    const resource = this.source.resources["repos"]
    const action = resource.getAction();
    return action(httpClient, query);
  }
  @Get("profile")
  @ApiQuery({"schema":{}})
  @ApiResponse({"schema":{"title":"GithubProfile","description":"A github profile","type":"object","properties":{"login":{"type":"string","description":"The username of the user"},"id":{"type":"string","description":"The id of the user"},"node_id":{"type":"string","description":"The node id of the user"},"avatar_url":{"type":"string","description":"The avatar url of the user"},"gravatar_id":{"type":"string","description":"The gravatar id of the user"},"url":{"type":"string","description":"The url of the user"},"html_url":{"type":"string","description":"The html url of the user"},"followers_url":{"type":"string","description":"The followers url of the user"},"following_url":{"type":"string","description":"The following url of the user"},"gists_url":{"type":"string","description":"The gists url of the user"}}}})
  profile(@Query() query, @AuthenticatedClient() httpClient): Promise<any> {
    const resource = this.source.resources["profile"]
    const action = resource.getAction();
    return action(httpClient, query);
  }

  
  @Get("authUrl")
  @ApiQuery("")
  getAuthUrl(@ClientCredentials() credentials, @Query() query): string {
    const { connectionRequestId } = query;
    const callbackUrl = `${process.env.API_URL}/github/callback`;
    return this.source.getAuthUrl(connectionRequestId, credentials.clientId, callbackUrl);
  }

  @Get("callback")
  async getAuthCallback(@Request() request, @CurrentAccount()): Promise<void> {
    const {credentials, state} = this.source.getAuthCallback(axios, request, );
    await this.accountService.create('oauth2', credentials, state); // the state is the connectionRequestId
    return {};
  }
}
