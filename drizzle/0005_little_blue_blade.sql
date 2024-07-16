CREATE TABLE IF NOT EXISTS "user_subscription" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"stipe_customer_id" text NOT NULL,
	"stripe_subscription_id" text NOT NULL,
	"stripe_price_id" text NOT NULL,
	"stripe_current_period_end" text NOT NULL,
	CONSTRAINT "user_subscription_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "user_subscription_stipe_customer_id_unique" UNIQUE("stipe_customer_id"),
	CONSTRAINT "user_subscription_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id")
);
