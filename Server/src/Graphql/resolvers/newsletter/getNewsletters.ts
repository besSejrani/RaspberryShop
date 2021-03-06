// GraphQL
import { Resolver, Query } from "type-graphql";

// Database
import { Newsletter, NewsletterModel } from "@Model/Newsletter";

// =================================================================================================

@Resolver()
export class NewslettersResolver {
  @Query(() => [Newsletter], { nullable: true })
  async getNewsletters(): Promise<Newsletter[] | null> {
    const newsletter = await NewsletterModel.find({});
    return newsletter;
  }
}
