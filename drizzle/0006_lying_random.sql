ALTER TABLE "user_subscription" RENAME COLUMN "stipe_customer_id" TO "stripe_customer_id";--> statement-breakpoint
ALTER TABLE "user_subscription" DROP CONSTRAINT "user_subscription_stipe_customer_id_unique";--> statement-breakpoint
ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_stripe_customer_id_unique" UNIQUE("stripe_customer_id");