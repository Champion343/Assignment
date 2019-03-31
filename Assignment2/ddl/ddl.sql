-- Table: public.animal

-- DROP TABLE public.animal;

--basic table in default no need for sequence or triggers for ease of alignment with 10 record req

CREATE TABLE public.animal
(
    id numeric NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.animal
    OWNER to "XXX";