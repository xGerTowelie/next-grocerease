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



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



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
	('2dddf269-d08d-47f0-b0bb-9174e76e8430', '2024-12-15 17:56:46.017619+00', 'Pizza', '44d673c5-7e99-4a91-bd56-fde32cc9282d');


--
-- Data for Name: shopping_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."shopping_items" ("id", "created_at", "name", "order", "type") VALUES
	('f798d1f4-fa48-4f6b-96e9-1555be29b2c4', '2024-12-15 17:50:01.876552+00', 'Zucker', 1000, NULL),
	('a3564586-a889-4455-a18f-333a652244e5', '2024-12-15 17:50:17.94456+00', 'Salz', 1000, NULL),
	('87bb6301-c6c8-44a6-8925-1f43d3fc0630', '2024-12-15 17:50:40.364678+00', 'Trockenhefe', 1200, NULL),
	('a9eb59cf-bbcb-4902-80ec-c0a698e247cf', '2024-12-15 17:51:28.101389+00', 'Pizzamehl', 1000, NULL),
	('c343f0cf-4911-4286-8623-043c381597a4', '2024-12-15 17:56:19.703096+00', 'Katzenfutter', 4000, 'Katzen');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


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

