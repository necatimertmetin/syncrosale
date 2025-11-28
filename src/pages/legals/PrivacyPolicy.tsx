import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

export const PrivacyPolicy = () => {
  const theme = useTheme();
  const MotionCard = motion(Card);
  const gridColor = theme.palette.highlightedRow.main + "44";

  return (
    <Box
      sx={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
        `,
        backgroundAttachment: "fixed",
        py: { xs: 8 },
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        {/* Başlık */}
        <Stack spacing={2} mb={6} textAlign="center">
          <EnterAnimation2>
            <Typography variant="h3" fontWeight={700}>
              Privacy Policy
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            Learn how SESA SHIPPING LLC and Syncrosale collect, use, and protect
            your information.
          </Typography>
        </Stack>

        {/* İçerik */}
        <MotionCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          sx={{
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.03)"
                : "rgba(0,0,0,0.04)",
            boxShadow: "0 0 25px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            p: 4,
            mt: 6,
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={1} textAlign="center">
            SESA SHIPPING LLC — Privacy &amp; Security Policy
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            sx={{ mb: 4, opacity: 0.8 }}
          >
            Last Updated: 25 November 2025
          </Typography>

          {/* 1. Introduction & Scope */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            1. Introduction &amp; Scope
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            SESA SHIPPING LLC (&quot;SESA SHIPPING&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
            privacy and ensuring the security of your personal information.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            This Privacy &amp; Security Policy explains how we collect, use,
            store, share, and safeguard personal data when you:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>
              Visit our website at sesashipping.com, syncrosale.com, or related
              subdomains
            </li>
            <li>Use our fulfillment, warehousing, and FBA prep services</li>
            <li>
              Access our customer portal, management dashboard, or the
              Syncrosale software
            </li>
            <li>Integrate our platform with marketplaces such as Amazon</li>
            <li>Communicate with us via email, phone, or support channels</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            This Policy applies to all personal data processed by SESA SHIPPING
            in connection with our logistics services, software solutions, and
            online platforms. By using our services, you acknowledge that you
            have read and understood this Policy and consent to the processing
            of your personal data as described herein, where legally required.
          </Typography>

          {/* 2. Data Controller Information */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            2. Data Controller Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, lineHeight: 1.8, opacity: 0.9 }}
          >
            For the purposes of applicable data protection laws, including the
            General Data Protection Regulation (GDPR), the California Consumer
            Privacy Act (CCPA), and other applicable regulations, the data
            controller is:
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, lineHeight: 1.8, opacity: 0.9 }}
          >
            SESA SHIPPING LLC
            <br />
            725 River Road
            <br />
            Suite 32 Unit 311
            <br />
            Edgewater, New Jersey 07020
            <br />
            United States
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, lineHeight: 1.8, opacity: 0.9 }}
          >
            Email: info@sesashipping.com
            <br />
            Phone: +1 862 462 5050
            <br />
            Data Protection Contact: privacy@sesashipping.com
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            <strong>EU/EEA and UK Residents:</strong> GDPR-related inquiries are
            handled directly by SESA SHIPPING LLC. A representative will be
            appointed if and when legally required.
          </Typography>

          {/* 3. Syncrosale Platform */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            3. Syncrosale Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Syncrosale is a software platform and brand owned and operated by
            SESA SHIPPING LLC. Any reference to Syncrosale refers to the
            software services, user interfaces, integrations, and automation
            tools provided under SESA SHIPPING’s control. Syncrosale does not
            operate as an independent legal entity.
          </Typography>

          {/* 4. Legal Basis for Processing */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            4. Legal Basis for Processing
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            We process personal data only where a lawful basis exists, including
            contractual necessity, legitimate interests, legal obligations, and
            consent where required.
          </Typography>

          {/* 5. Information We Collect */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            5. Information We Collect
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mt: 1, mb: 1 }}
          >
            5.1 Personal and Account Information
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Name and surname</li>
            <li>Email address and phone number</li>
            <li>Business details and shipping address</li>
            <li>Login credentials and account preferences</li>
          </Box>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mt: 1, mb: 1 }}
          >
            5.2 Business and Fulfillment Data
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Company and tax identification details</li>
            <li>Inventory records, SKUs, product information</li>
            <li>Order details and fulfillment activity</li>
            <li>Shipping recipient name, address, and phone number</li>
            <li>Carrier and tracking information</li>
          </Box>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mt: 1, mb: 1 }}
          >
            5.3 Syncrosale Platform Data
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>User account details</li>
            <li>License status and activation identifiers</li>
            <li>Technical configuration and usage logs</li>
            <li>Enabled and disabled modules and features</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            Syncrosale only requests and processes the minimum amount of data
            necessary to provide the service.
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mt: 1, mb: 1 }}
          >
            5.4 Payment and Billing Information
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Billing name and address</li>
            <li>Invoice and transaction history</li>
            <li>Tax documentation</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            SESA SHIPPING does not store raw credit card details. Recurring
            billing is handled securely by the payment gateway in compliance
            with PCI-DSS.
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mt: 1, mb: 1 }}
          >
            5.5 Automatically Collected Data
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 3, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>IP address, browser type, device type</li>
            <li>Session duration and click behavior</li>
            <li>Server logs and error data</li>
            <li>General location derived from IP</li>
            <li>Cookies and tracking identifiers</li>
          </Box>

          {/* 6. Amazon Data Collection and Retention */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            6. Amazon Data Collection and Retention
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            For automation and order processing through Syncrosale, we may
            process recipient name, address, and phone number as well as order
            and shipment data. This data is retained for up to 30 days from the
            shipment date and then deleted or anonymized unless legally required
            otherwise.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            If a user revokes authorization or disconnects Syncrosale from their
            Amazon account, all Amazon data is permanently deleted within 30
            days unless a longer period is required by law.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            For Amazon-related personal data, SESA SHIPPING acts solely as a
            data processor on behalf of the Amazon seller. Human access to
            Amazon data is strictly limited, requires authorization, is logged,
            and only occurs when necessary for support purposes.
          </Typography>

          {/* 7. How We Use Your Information */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            7. How We Use Your Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            We use personal data to:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 3, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Provide fulfillment, warehouse, and distribution services</li>
            <li>Operate the Syncrosale platform and integrations</li>
            <li>Authenticate and manage accounts</li>
            <li>Process payments and issue invoices</li>
            <li>Send service-related notifications</li>
            <li>Improve system performance and security</li>
            <li>Prevent fraud and unauthorized access</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Send marketing communications where legally permitted</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Amazon data is never used for advertising, profiling, or independent
            third-party purposes.
          </Typography>

          {/* 8. Data Sharing and Disclosure */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            8. Data Sharing and Disclosure
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            We do not sell personal information. We may share data with service
            providers including:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Shipping carriers</li>
            <li>Payment processors</li>
            <li>Cloud hosting providers</li>
            <li>Customer support platforms</li>
            <li>Analytics services</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            All providers are bound by contractual confidentiality and data
            protection obligations. Data may also be disclosed to comply with
            law, enforce contractual terms, prevent fraud, or protect security.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            In case of merger or acquisition, data may transfer to a successor
            entity. We only share information with third parties when explicitly
            authorized or when legally required.
          </Typography>

          {/* 9. International Data Transfers */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            9. International Data Transfers
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Data may be processed in the United States and other jurisdictions.
            Safeguards include Standard Contractual Clauses, data processing
            agreements, and encryption and access controls. By using our
            services, you acknowledge and, where required, consent to such
            transfers.
          </Typography>

          {/* 10. Data Storage and Retention */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            10. Data Storage and Retention
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            All stored data is encrypted at rest using industry-standard
            encryption. Retention periods include:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 3, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Active accounts: duration of the relationship plus 90 days</li>
            <li>Orders and financial records: 7 years</li>
            <li>Amazon data: 30 days, then deleted or anonymized</li>
            <li>Support communications: typically 3 years</li>
            <li>Server logs: 12 months</li>
            <li>Marketing data: until opt-out</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            After expiration, data is securely deleted or anonymized.
          </Typography>

          {/* 11. Cookies and Tracking */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            11. Cookies and Tracking
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            We use essential, functional, analytics, and marketing cookies where
            permitted. Users may control cookies through their browser settings.
          </Typography>

          {/* 12. Payment and Credit Card Security */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            12. Payment and Credit Card Security
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            All transmissions use 256-bit SSL encryption. No raw card data is
            stored by SESA SHIPPING. Recurring billing is managed securely by
            the payment gateway. Mail-order submissions are retained up to 60
            days solely for dispute handling and then destroyed.
          </Typography>

          {/* 13. Exceptional Circumstances */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            13. Exceptional Circumstances
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Data may be disclosed if necessary to comply with law, respond to
            lawful requests, fulfill contractual obligations, or protect safety
            and system security.
          </Typography>

          {/* 14. Security Measures */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            14. Security Measures
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            Technical controls include:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>TLS/SSL encryption</li>
            <li>AES-256 encryption at rest</li>
            <li>Encrypted backups</li>
            <li>Multi-factor authentication</li>
            <li>Intrusion detection and monitoring</li>
            <li>Firewalls and access controls</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            Organizational controls include:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 4, mb: 2, opacity: 0.9, lineHeight: 1.8 }}
          >
            <li>Confidentiality agreements</li>
            <li>Employee training</li>
            <li>Incident response procedures</li>
            <li>Regular audits and assessments</li>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            In the event of a security incident involving Amazon data, SESA
            SHIPPING will notify affected users and Amazon without undue delay
            in accordance with applicable requirements.
          </Typography>

          {/* 15. Children’s Privacy */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            15. Children’s Privacy
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Our services are not directed to individuals under 18 years of age.
            We do not knowingly collect data from minors. If such data is
            identified, it will be deleted.
          </Typography>

          {/* 16. Your Privacy Rights */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            16. Your Privacy Rights
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            GDPR/UK GDPR rights include access, correction, deletion,
            restriction, objection, portability, withdrawal of consent, and the
            right to lodge complaints. CCPA/CPRA rights include right to know,
            delete, correct, opt-out (where applicable), and non-discrimination.
            KVKK-equivalent rights may be exercised by contacting SESA SHIPPING.
            SESA SHIPPING does not currently maintain a KVKK representative in
            Turkey.
          </Typography>

          {/* 17. Exercising Your Rights */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            17. Exercising Your Rights
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, lineHeight: 1.8, opacity: 0.9 }}
          >
            You may exercise your rights by contacting:
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, lineHeight: 1.8, opacity: 0.9 }}
          >
            Email: info@sesashipping.com
            <br />
            Phone: +1 862 462 5050
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, lineHeight: 1.8, opacity: 0.9 }}
          >
            Mailing Address:
            <br />
            SESA SHIPPING LLC
            <br />
            725 River Road Suite 32 Unit 311
            <br />
            Edgewater, NJ 07020
            <br />
            United States
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Identity verification may be required. Responses will be provided
            within legally required timeframes.
          </Typography>

          {/* 18. Email Security */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            18. Email Security
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            Do not send sensitive information such as passwords or full credit
            card numbers via email.
          </Typography>

          {/* 19. Changes to This Policy */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            19. Changes to This Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
          >
            We may update this Policy from time to time. When changes occur, we
            will update the effective date and provide notice as required.
            Continued use of our services constitutes acceptance of the updated
            Policy.
          </Typography>

          {/* 20. Contact Information */}
          <Typography variant="h6" fontWeight={700} mt={2} mb={1}>
            20. Contact Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 0, lineHeight: 1.8, opacity: 0.9 }}
          >
            SESA SHIPPING LLC
            <br />
            725 River Road Suite 32 Unit 311
            <br />
            Edgewater, NJ 07020
            <br />
            United States
            <br />
            Email: info@sesashipping.com
            <br />
            Phone: +1 862 462 5050
          </Typography>
        </MotionCard>
      </Container>
    </Box>
  );
};
