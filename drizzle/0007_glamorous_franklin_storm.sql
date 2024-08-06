ALTER TABLE "user_subscription" RENAME COLUMN "stripe_customer_id" TO "stipe_customer_id";--> statement-breakpoint
ALTER TABLE "user_subscription" DROP CONSTRAINT "user_subscription_stripe_customer_id_unique";--> statement-breakpoint
ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_stipe_customer_id_unique" UNIQUE("stipe_customer_id");