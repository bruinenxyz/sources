/* eslint-disable */
// @ts-nocheck

import { Controller, UseGuards, UseInterceptors } from "@nestjs/common";
import { Github } from "./sources/github";
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
  @ApiQuery(this.source.getRepo.input)
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
