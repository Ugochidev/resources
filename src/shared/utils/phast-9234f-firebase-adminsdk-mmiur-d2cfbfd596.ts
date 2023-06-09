import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

module.exports = {
  type: process.env.FCM_TYPE,
  project_id: process.env.FCM_PROJECT_ID,
  private_key_id: process.env.FCM_PRIVATE_KEY_ID,
  private_key:
    `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMXZpSoEOtXu20\nsmaiGWQQXDllW+6QRb4TEZXu8R3bYgT/uu4Vz5O0NWg4kal2XUpR+Rgcvt73bDvH\ndk0mqQ72wFXowlcYHlq2zPZTGZPXoMTy26ErQnt2jTD1FBWG31+vZLmS/F6twx87\nKZrS5C6UOCj31Xl03dRFveorxXylqcSpC4TTu06yBaxgn5tVEcqKht9tTOu/uM7/\nkjINbZ9wFZddpCrmxiQdyYuw6r6tMEghEivrWrwk6NO1JybBH3RUJJgYJg13gzdr\nT/2DIRffvymyEXa4McwQ6S2hkXClIipqOOlvS8NTHmahQvepdhkvAWAE5bICMyi6\nJZ7SRSJhAgMBAAECggEABcmPzXpgOEMUMGC4oytcvVGInDwgfcxFJUqYnZ835SbP\nNUPAqsme/pngP/EwufCgjRY6A9RhluL6hWaY/uOHkDQjAAKtjzoK1RrpozGkpr+q\nMXtymA7w//WLIaGbjh8kw/WHrifV8Y3xRDkPJfI+zG/pCcMCm8KNbe/XzLyyD985\nhUY/3o43mKD19B74YyAaUkfmI6VlfOw72Vi7iwam5BxBoVx22zILDjAAS6xiG90e\npnuDrgJkiUtfbQVZQ3b10tf7/BKB0wxcGMh8/gxcpG1g6lRjkKuRh482idgiyMtn\nTEcFvi92rttnq581OnKlR/AhmIAB9LC7OWD/ppJdcQKBgQDlvYKVs+zBwxquVJya\nBo3aDyJvOtlQvv2eoFqGZwIGocgkYtyPDoy9AG1Yhwzpym1+szT9Uu+mZeGQcLHh\nl1ntscHEO1XKGbUnaAKBZJCHDLeTT5rXaF12g52hX0x2xG3ssYi+TnE22EiyMzcY\nKafowO3TYG6KglUiglsqts72OQKBgQDjuZlOSCctYCIwvTPeRNmDhxM6LUwIkqw1\nUKpSs87L9LWO/NXyfj7c2MZJk8cUOO26tpd3g9I4oUfsyLDGGk2hVEhYJeX9s1LX\nc062FRz1o7nNEi0pii5y2JBag1oNHjuOZriCyCGvXkIVz1IF9lV5Wk5UODGGa0Ec\nCALGGetNaQKBgQCtQKhM2x4t1UO2ukpLAaxSCN3QAhJGiXHcAVOjTeVCORklD4UD\nQVazZbIQc/AyEx1V0jGg5L2jv+tGMSaEWM5RqZ7VrGV6/r4VlKNnDv7LSbTbG8pK\nrgLl0EW8n5CbdHDtcckMsz0/vgW8lVD0IN3mcjAoGu3h+H3Zg3LbGHelSQKBgC8G\nG1cj5Rskl8rStww10WisktbXlbTLfM4Bmzo6sQBCxt8A7LkHQrnd9Ywp/Nj7LHP6\n0mo2iUlyXGTTyFUQB2nB+rJhGQ37Yqbkw6Mr1vAOYAatsy+5vf+vIpfeOdEtpgSw\nx3cSFoqc/y57widDB8FoWXZgqDFmompEaTY5EfLJAoGAX+8uaX18VzhlWA73h3/U\n9QgnZz7g3fZNHh6ALrXopPU6l9v4DuAcvTNJ0aoXeyVjqD2aYUx3tjxbFMhWpU6p\nXOUyoZ4a9EyMRwQmtIfmXbjHqby8wNkHflcn5BnH+sxd+oZbzi62Ej8h+O3xIFb7\ncALRh/Pdh9KtKYJnm470CGc=\n-----END PRIVATE KEY-----\n`,
  client_email: process.env.FCM_CLIENT_EMAIL,
  client_id: process.env.FCM_CLIENT_ID,
  auth_uri: process.env.FCM_CLIENT_URI,
  token_uri: process.env.FCM_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FCM_AUTH_PROVODER_x509_CERT_URI,
  client_x509_cert_url: process.env.FCM_CLIENT_x509_CERT_URI,
};