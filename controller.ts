/* eslint-disable */
// @ts-nocheck

import { Controller, UseGuards, UseInterceptors } from "@nestjs/common";
import { github } from "./sources/github";
import { AccountService } from "./account/account.service";

@Controller("github")
@UseInterceptors(ClientPolicyCheck, UserPolicyCheck, TrackUsage)
@ApiTags("sources")
@UseGuards(AuthGuard("custom"))
export class GithubController {
  source: Github;
  constructor(private accountService: AccountService) {
    this.source = new Github();
  }
  @Get("repos")
  @ApiQuery({"title":"GetRepoReturn","description":"The return type of the getRepo call","type":"object","properties":{"id":{"description":"The id of the repository","type":"integer"},"description":{"description":"The description of the repository","type":"string"}},"required":["name","description"]})
  @ApiResponse({"title":"GetRepoReturn","description":"The return type of the getRepo call","type":"object","properties":{"name":{"description":"The name of the repository","type":"integer"},"description":{"description":"The description of the repository","type":"string"}},"required":["name","description"]})
  getRepo(@Query() query, @AuthenticatedClient() httpClient): this.source.getRepo.output {
    return this.source.getRepo(httpClient, query);
  }

  
  @Get("authUrl")
  getAuthUrl(): string {
    return this.source.getAuthUrl();
  }

  @Get("callback")
  getAuthCallback(@Request() request, @CurrentAccount()): Promise<void> {
    const credentials =  this.source.getAuthCallback(request);
    return this.accountService.create('oauth2', credentials);
  }
}
