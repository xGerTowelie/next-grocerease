create table "public"."types" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null default ''::text,
    "color" text
);


alter table "public"."types" enable row level security;

CREATE UNIQUE INDEX types_name_key ON public.types USING btree (name);

CREATE UNIQUE INDEX types_pkey ON public.types USING btree (id);

alter table "public"."types" add constraint "types_pkey" PRIMARY KEY using index "types_pkey";

alter table "public"."types" add constraint "types_name_key" UNIQUE using index "types_name_key";

grant delete on table "public"."types" to "anon";

grant insert on table "public"."types" to "anon";

grant references on table "public"."types" to "anon";

grant select on table "public"."types" to "anon";

grant trigger on table "public"."types" to "anon";

grant truncate on table "public"."types" to "anon";

grant update on table "public"."types" to "anon";

grant delete on table "public"."types" to "authenticated";

grant insert on table "public"."types" to "authenticated";

grant references on table "public"."types" to "authenticated";

grant select on table "public"."types" to "authenticated";

grant trigger on table "public"."types" to "authenticated";

grant truncate on table "public"."types" to "authenticated";

grant update on table "public"."types" to "authenticated";

grant delete on table "public"."types" to "service_role";

grant insert on table "public"."types" to "service_role";

grant references on table "public"."types" to "service_role";

grant select on table "public"."types" to "service_role";

grant trigger on table "public"."types" to "service_role";

grant truncate on table "public"."types" to "service_role";

grant update on table "public"."types" to "service_role";

create policy "Allow all CRUD"
on "public"."recepies"
as permissive
for all
to public
using (true);


create policy "Allow CRUD"
on "public"."shopping_items"
as permissive
for all
to public
using (true);



