SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '7cff2db8-8793-4039-93f8-861c8000d5d4', '{"action":"user_signedup","actor_id":"e40df4aa-b4af-47bc-8ad3-be72c1319cd7","actor_name":"Marcel Maier","actor_username":"marcel.maier@lit-beratung.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"keycloak"}}', '2024-12-15 18:35:10.528161+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9548dc4-7446-46d9-8de5-41a630b2f520', '{"action":"login","actor_id":"e40df4aa-b4af-47bc-8ad3-be72c1319cd7","actor_name":"Marcel Maier","actor_username":"marcel.maier@lit-beratung.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"keycloak"}}', '2024-12-15 18:35:11.188196+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e1ce93d-894d-4b3e-ac6a-ddedb3743c2e', '{"action":"token_refreshed","actor_id":"e40df4aa-b4af-47bc-8ad3-be72c1319cd7","actor_name":"Marcel Maier","actor_username":"marcel.maier@lit-beratung.com","actor_via_sso":false,"log_type":"token"}', '2024-12-15 19:37:05.602473+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b5d8a43d-d648-40e9-80b6-0cbbabc54ecf', '{"action":"token_revoked","actor_id":"e40df4aa-b4af-47bc-8ad3-be72c1319cd7","actor_name":"Marcel Maier","actor_username":"marcel.maier@lit-beratung.com","actor_via_sso":false,"log_type":"token"}', '2024-12-15 19:37:05.603357+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ff3420e-25c0-4ffe-927f-f09e98924504', '{"action":"token_refreshed","actor_id":"e40df4aa-b4af-47bc-8ad3-be72c1319cd7","actor_name":"Marcel Maier","actor_username":"marcel.maier@lit-beratung.com","actor_via_sso":false,"log_type":"token"}', '2024-12-15 19:37:05.633382+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'e40df4aa-b4af-47bc-8ad3-be72c1319cd7', 'authenticated', 'authenticated', 'marcel.maier@lit-beratung.com', NULL, '2024-12-15 18:35:10.529019+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-12-15 18:35:11.188615+00', '{"provider": "keycloak", "providers": ["keycloak"]}', '{"iss": "https://auth.towelie.dev/realms/supabase", "sub": "d6b21ea8-f84c-4477-94af-885412dde7d9", "name": "Marcel Maier", "email": "marcel.maier@lit-beratung.com", "full_name": "Marcel Maier", "provider_id": "d6b21ea8-f84c-4477-94af-885412dde7d9", "email_verified": true, "phone_verified": false}', NULL, '2024-12-15 18:35:10.522171+00', '2024-12-15 19:37:05.605954+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('d6b21ea8-f84c-4477-94af-885412dde7d9', 'e40df4aa-b4af-47bc-8ad3-be72c1319cd7', '{"iss": "https://auth.towelie.dev/realms/supabase", "sub": "d6b21ea8-f84c-4477-94af-885412dde7d9", "name": "Marcel Maier", "email": "marcel.maier@lit-beratung.com", "full_name": "Marcel Maier", "provider_id": "d6b21ea8-f84c-4477-94af-885412dde7d9", "email_verified": true, "phone_verified": false}', 'keycloak', '2024-12-15 18:35:10.525979+00', '2024-12-15 18:35:10.526007+00', '2024-12-15 18:35:10.526007+00', '71fdf02b-e90f-4f01-8a43-76a6c418839f');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('8c8ab572-ca54-406b-ad9b-8c8d57dbef46', 'e40df4aa-b4af-47bc-8ad3-be72c1319cd7', '2024-12-15 18:35:11.188658+00', '2024-12-15 19:37:05.634428+00', NULL, 'aal1', NULL, '2024-12-15 19:37:05.634394', 'Next.js Middleware', '172.26.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('8c8ab572-ca54-406b-ad9b-8c8d57dbef46', '2024-12-15 18:35:11.192034+00', '2024-12-15 18:35:11.192034+00', 'oauth', '06a4075d-bae7-4bdd-929e-8c0208d63625');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'HdimoEK983NaM5f2DuC92A', 'e40df4aa-b4af-47bc-8ad3-be72c1319cd7', true, '2024-12-15 18:35:11.190249+00', '2024-12-15 19:37:05.603812+00', NULL, '8c8ab572-ca54-406b-ad9b-8c8d57dbef46'),
	('00000000-0000-0000-0000-000000000000', 2, 'iiqSxtR-o9Dgk73lyN2QrA', 'e40df4aa-b4af-47bc-8ad3-be72c1319cd7', false, '2024-12-15 19:37:05.605029+00', '2024-12-15 19:37:05.605029+00', 'HdimoEK983NaM5f2DuC92A', '8c8ab572-ca54-406b-ad9b-8c8d57dbef46');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: recepies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."recepies" ("id", "created_at", "name", "ingredients") VALUES
	('2dddf269-d08d-47f0-b0bb-9174e76e8430', '2024-12-15 17:56:46.017619+00', 'Pizza', '44d673c5-7e99-4a91-bd56-fde32cc9282d'),
	('9c5e7e42-fd5b-4ae5-b4f1-d8de404620f6', '2024-12-15 19:24:35.063171+00', 'Gulasch', 'f1d872af-c6ad-4479-817f-1742704111bf');


--
-- Data for Name: shopping_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."shopping_items" ("id", "created_at", "name", "order", "type") VALUES
	('f798d1f4-fa48-4f6b-96e9-1555be29b2c4', '2024-12-15 17:50:01.876552+00', 'Zucker', 1000, NULL),
	('a3564586-a889-4455-a18f-333a652244e5', '2024-12-15 17:50:17.94456+00', 'Salz', 1000, NULL),
	('87bb6301-c6c8-44a6-8925-1f43d3fc0630', '2024-12-15 17:50:40.364678+00', 'Trockenhefe', 1200, NULL),
	('a9eb59cf-bbcb-4902-80ec-c0a698e247cf', '2024-12-15 17:51:28.101389+00', 'Pizzamehl', 1000, NULL),
	('c343f0cf-4911-4286-8623-043c381597a4', '2024-12-15 17:56:19.703096+00', 'Katzenfutter', 4000, 'Katzen'),
	('fc6bc54f-c386-42e4-b54b-d6160689c9ef', '2024-12-15 19:10:36.520002+00', 'test', 1000, 'Lebensmittel');


--
-- Data for Name: recepies_ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."recepies_ingredients" ("id", "created_at", "recepie", "ingredient") VALUES
	('8c5ea28b-1885-42e2-884f-15bd5efdff85', '2024-12-15 17:57:26.710676+00', '2dddf269-d08d-47f0-b0bb-9174e76e8430', '87bb6301-c6c8-44a6-8925-1f43d3fc0630'),
	('82ee7c7e-24ba-45d6-a6a3-d55ee248d985', '2024-12-15 17:57:42.18931+00', '2dddf269-d08d-47f0-b0bb-9174e76e8430', 'a3564586-a889-4455-a18f-333a652244e5'),
	('b298b513-c47e-446d-b2ad-c1c59ac6716b', '2024-12-15 17:57:55.078837+00', '2dddf269-d08d-47f0-b0bb-9174e76e8430', 'f798d1f4-fa48-4f6b-96e9-1555be29b2c4'),
	('8c372199-4597-42b6-92bc-14f9f7d9b7ef', '2024-12-15 17:58:12.449315+00', '2dddf269-d08d-47f0-b0bb-9174e76e8430', 'a9eb59cf-bbcb-4902-80ec-c0a698e247cf');


--
-- Data for Name: shopping_stores; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."shopping_stores" ("id", "created_at", "name") VALUES
	(1, '2024-12-15 17:52:50.747033+00', 'Aldi'),
	(2, '2024-12-15 17:53:02.703345+00', 'Edeka');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 2, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: shopping_stores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."shopping_stores_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
