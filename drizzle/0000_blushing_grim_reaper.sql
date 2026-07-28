CREATE TABLE `audit_logs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`actor_user_id` integer,
	`actor_email` text NOT NULL,
	`actor_name` text NOT NULL,
	`actor_role` text NOT NULL,
	`action` text NOT NULL,
	`area` text NOT NULL,
	`target` text NOT NULL,
	`details` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`actor_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `audit_actor_idx` ON `audit_logs` (`actor_email`);--> statement-breakpoint
CREATE INDEX `audit_area_idx` ON `audit_logs` (`area`);--> statement-breakpoint
CREATE INDEX `audit_created_at_idx` ON `audit_logs` (`created_at`);--> statement-breakpoint
CREATE TABLE `media_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`media_type` text DEFAULT 'DOCUMENTARY' NOT NULL,
	`provider` text DEFAULT 'EXTERNAL' NOT NULL,
	`url` text NOT NULL,
	`thumbnail_url` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'PUBLISHED' NOT NULL,
	`featured` integer DEFAULT false NOT NULL,
	`created_by` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `media_status_idx` ON `media_items` (`status`);--> statement-breakpoint
CREATE INDEX `media_featured_idx` ON `media_items` (`featured`);--> statement-breakpoint
CREATE TABLE `site_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updated_by` integer,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`role` text DEFAULT 'LEITURA' NOT NULL,
	`status` text DEFAULT 'ACTIVE' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE INDEX `users_role_idx` ON `users` (`role`);--> statement-breakpoint
CREATE INDEX `users_status_idx` ON `users` (`status`);