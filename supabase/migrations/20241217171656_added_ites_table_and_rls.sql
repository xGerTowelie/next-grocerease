create table "public"."item" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "type_id" uuid not null,
    "store_id" uuid not null,
    "last_bought" timestamp with time zone,
    "is_favorite" boolean not null default false
);


alter table "public"."item" enable row level security;

CREATE UNIQUE INDEX item_pkey ON public.item USING btree (id);

alter table "public"."item" add constraint "item_pkey" PRIMARY KEY using index "item_pkey";

alter table "public"."item" add constraint "item_store_id_fkey" FOREIGN KEY (store_id) REFERENCES stores(id) not valid;

alter table "public"."item" validate constraint "item_store_id_fkey";

alter table "public"."item" add constraint "item_type_id_fkey" FOREIGN KEY (type_id) REFERENCES types(id) not valid;

alter table "public"."item" validate constraint "item_type_id_fkey";

grant delete on table "public"."item" to "anon";

grant insert on table "public"."item" to "anon";

grant references on table "public"."item" to "anon";

grant select on table "public"."item" to "anon";

grant trigger on table "public"."item" to "anon";

grant truncate on table "public"."item" to "anon";

grant update on table "public"."item" to "anon";

grant delete on table "public"."item" to "authenticated";

grant insert on table "public"."item" to "authenticated";

grant references on table "public"."item" to "authenticated";

grant select on table "public"."item" to "authenticated";

grant trigger on table "public"."item" to "authenticated";

grant truncate on table "public"."item" to "authenticated";

grant update on table "public"."item" to "authenticated";

grant delete on table "public"."item" to "service_role";

grant insert on table "public"."item" to "service_role";

grant references on table "public"."item" to "service_role";

grant select on table "public"."item" to "service_role";

grant trigger on table "public"."item" to "service_role";

grant truncate on table "public"."item" to "service_role";

grant update on table "public"."item" to "service_role";

create policy "Allow all CRUD"
on "public"."item"
as permissive
for all
to public
using (true);



