import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: {
    slug: string;
  };
}

// Sample articles data (in production, this would come from a CMS or markdown files)
const articles: Record<string, any> = {
  'understanding-itr-filing-basics': {
    title: 'Understanding the basics of income tax return filing in India',
    category: 'Income Tax',
    date: '2025-11-20',
    readTime: '5 min read',
    content: `
      <p>Income tax return (ITR) filing is an annual compliance requirement for individuals and entities earning income in India. This article provides an educational overview of the ITR filing process, applicable forms, and general procedures.</p>

      <h2>Who Must File ITR?</h2>
      <p>Income tax returns must generally be filed by:</p>
      <ul>
        <li>Individuals whose total income exceeds the basic exemption limit</li>
        <li>Companies and firms, regardless of profit or loss</li>
        <li>Persons claiming refunds</li>
        <li>Individuals with foreign assets or income</li>
        <li>Certain other specified categories under income tax law</li>
      </ul>

      <h2>Common ITR Forms</h2>
      <p>Different ITR forms apply to different categories of taxpayers:</p>

      <h3>ITR-1 (Sahaj)</h3>
      <p>For resident individuals having income from salary, one house property, and other sources (with conditions).</p>

      <h3>ITR-2</h3>
      <p>For individuals and HUFs not having income from business or profession.</p>

      <h3>ITR-3</h3>
      <p>For individuals and HUFs having income from business or profession.</p>

      <h3>ITR-4 (Sugam)</h3>
      <p>For presumptive income from business and profession under sections 44AD, 44ADA, or 44AE.</p>

      <h2>General Filing Process</h2>
      <ol>
        <li><strong>Gather Documents:</strong> Form 16, Form 26AS, investment proofs, bank statements, and other relevant documents</li>
        <li><strong>Compute Income:</strong> Calculate total income from all sources and applicable deductions</li>
        <li><strong>Select Form:</strong> Choose the appropriate ITR form based on income sources</li>
        <li><strong>Fill Details:</strong> Complete the form with accurate information</li>
        <li><strong>Verify Tax:</strong> Check pre-filled information and reconcile TDS credits</li>
        <li><strong>File Return:</strong> Submit electronically on the income tax portal</li>
        <li><strong>E-Verify:</strong> Complete e-verification within specified timelines</li>
      </ol>

      <h2>Due Dates (General)</h2>
      <p>For most individual taxpayers not requiring audit:</p>
      <ul>
        <li>31st July of the assessment year (subject to extensions)</li>
      </ul>
      <p>For taxpayers requiring audit, due dates differ and should be verified with current provisions.</p>

      <h2>Important Considerations</h2>
      <ul>
        <li>Accuracy of information is essential</li>
        <li>Late filing may attract fees under Section 234F</li>
        <li>Verification is mandatory to complete the filing process</li>
        <li>Keep supporting documents for a reasonable period</li>
        <li>Check Form 26AS and AIS for pre-filled information accuracy</li>
      </ul>

      <h2>Professional Assistance</h2>
      <p>Given the complexity of tax laws and individual circumstances, professional guidance is often beneficial for:</p>
      <ul>
        <li>Identifying applicable deductions and exemptions</li>
        <li>Ensuring compliance with all requirements</li>
        <li>Optimizing tax liability within legal frameworks</li>
        <li>Handling complex income sources or transactions</li>
      </ul>

      <p><em>Note: This article is for educational purposes and provides general information only. Tax laws change frequently, and individual circumstances vary. For specific tax planning or filing assistance, professional consultation is recommended.</em></p>
    `,
  },
  'gst-input-tax-credit-guide': {
    title: 'GST input tax credit: Key concepts and reconciliation',
    category: 'GST',
    date: '2025-11-15',
    readTime: '6 min read',
    content: `
      <p>Input Tax Credit (ITC) is a fundamental mechanism under the Goods and Services Tax (GST) system. This guide explains basic concepts, eligibility, and the importance of reconciliation.</p>

      <h2>What is Input Tax Credit?</h2>
      <p>Input Tax Credit allows taxpayers to reduce the GST paid on purchases (inputs) from the GST collected on sales (outputs). This prevents cascading taxation and ensures tax is levied only on value addition.</p>

      <h2>Eligibility for ITC</h2>
      <p>To claim input tax credit, the following conditions generally apply:</p>
      <ul>
        <li>Possession of a valid tax invoice or debit note</li>
        <li>Receipt of goods or services</li>
        <li>Tax payment by the supplier to the government</li>
        <li>Filing of GST returns</li>
        <li>Use of inputs for business purposes</li>
      </ul>

      <h2>Blocked Credits</h2>
      <p>Certain inputs and services do not qualify for ITC under Section 17(5), including:</p>
      <ul>
        <li>Motor vehicles (with exceptions)</li>
        <li>Food and beverages</li>
        <li>Membership of clubs and health centers</li>
        <li>Personal consumption items</li>
      </ul>

      <h2>ITC Reconciliation</h2>
      <p>Reconciliation ensures that ITC claimed matches with:</p>
      <ul>
        <li>Supplier's GSTR-1 (outward supplies)</li>
        <li>GSTR-2B auto-populated statement</li>
        <li>Purchase records and books of accounts</li>
      </ul>

      <h2>Reconciliation Process</h2>
      <ol>
        <li><strong>Download GSTR-2B:</strong> Monthly auto-drafted statement showing eligible ITC</li>
        <li><strong>Match with Books:</strong> Compare GSTR-2B with purchase register</li>
        <li><strong>Identify Mismatches:</strong> Note invoices appearing in books but not in 2B, and vice versa</li>
        <li><strong>Follow Up:</strong> Contact suppliers for missing or incorrect reporting</li>
        <li><strong>Adjust Claims:</strong> Claim only eligible and matched ITC</li>
      </ol>

      <h2>Common Reconciliation Issues</h2>
      <ul>
        <li>Supplier filed GSTR-1 late or incorrectly</li>
        <li>GSTIN errors in invoices</li>
        <li>Rate or amount mismatches</li>
        <li>Blocked credit items claimed inadvertently</li>
      </ul>

      <h2>Time Limits</h2>
      <p>ITC must generally be claimed:</p>
      <ul>
        <li>Before filing return for September following the financial year, OR</li>
        <li>Before filing annual return, whichever is earlier</li>
      </ul>

      <h2>Reversal of ITC</h2>
      <p>ITC may need to be reversed in cases such as:</p>
      <ul>
        <li>Non-payment to supplier within 180 days</li>
        <li>Proportionate reversal for exempt supplies (if applicable)</li>
        <li>Goods or services used for non-business purposes</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Maintain proper documentation and invoices</li>
        <li>Reconcile monthly before filing returns</li>
        <li>Verify GSTR-2B regularly</li>
        <li>Ensure timely communication with suppliers</li>
        <li>Keep separate records of blocked credit items</li>
      </ul>

      <p><em>Note: GST provisions are subject to amendments and clarifications. This article provides general educational information and should not be relied upon for specific compliance decisions. Professional advice should be sought for ITC claims and reconciliation.</em></p>
    `,
  },
  'annual-roc-compliances-overview': {
    title: 'Annual ROC compliances for private limited companies',
    category: 'Corporate Law',
    date: '2025-11-10',
    readTime: '7 min read',
    content: `
      <p>Private limited companies in India must comply with annual filing requirements under the Companies Act, 2013. This article provides an overview of key annual compliances with the Registrar of Companies (ROC).</p>

      <h2>Annual Statutory Filings</h2>
      <p>Every private limited company must file the following forms annually with the Ministry of Corporate Affairs (MCA):</p>

      <h3>1. Annual Return (Form MGT-7)</h3>
      <p>The annual return contains details about the company's registered office, principal business activities, shareholding pattern, directors, and other key information as of the financial year-end.</p>
      <ul>
        <li><strong>Due Date:</strong> Within 60 days from the date of Annual General Meeting (AGM)</li>
        <li><strong>Certification:</strong> Must be certified by a practicing Company Secretary or the company secretary (if appointed)</li>
        <li><strong>Contents:</strong> Shareholding, directors, registered office, debt details, and other statutory information</li>
      </ul>

      <h3>2. Financial Statements (Form AOC-4)</h3>
      <p>Audited financial statements including Balance Sheet, Profit & Loss Account, Cash Flow Statement (if applicable), and notes to accounts must be filed.</p>
      <ul>
        <li><strong>Due Date:</strong> Within 30 days from the date of AGM</li>
        <li><strong>Attachments:</strong> Board report, auditor's report, and other required annexures</li>
        <li><strong>Certification:</strong> Digitally signed by director and company secretary (if appointed)</li>
      </ul>

      <h3>3. Annual General Meeting (AGM)</h3>
      <p>While not a filing, conducting the AGM is a prerequisite for annual filings.</p>
      <ul>
        <li><strong>Timeline:</strong> Within 6 months from the end of financial year</li>
        <li><strong>Extension:</strong> Can be extended by up to 3 months by the Registrar on application</li>
        <li><strong>Purpose:</strong> Adoption of financial statements, appointment of auditors, declaration of dividend (if any)</li>
      </ul>

      <h2>Director-Related Compliances</h2>

      <h3>Director KYC (Form DIR-3 KYC)</h3>
      <p>All directors must file their KYC annually with MCA.</p>
      <ul>
        <li><strong>Due Date:</strong> On or before 30th September every year</li>
        <li><strong>Applicability:</strong> All directors having DIN as of 31st March</li>
        <li><strong>Fee:</strong> Nominal fee for timely filing; higher fee for delayed filing</li>
      </ul>

      <h2>Board Meeting Requirements</h2>
      <p>Private limited companies must hold board meetings at regular intervals:</p>
      <ul>
        <li>Minimum 4 board meetings per year</li>
        <li>Maximum gap of 120 days between two meetings</li>
        <li>Minutes must be maintained and signed</li>
      </ul>

      <h2>Statutory Registers</h2>
      <p>Companies must maintain and update the following registers:</p>
      <ul>
        <li>Register of Members</li>
        <li>Register of Directors and Key Managerial Personnel</li>
        <li>Register of Charges</li>
        <li>Minutes books (Board and General Meetings)</li>
        <li>Register of Contracts (if applicable)</li>
      </ul>

      <h2>Compliance Timeline</h2>
      <p>A typical annual compliance calendar for a company with March year-end:</p>
      <ol>
        <li><strong>By 30th September:</strong> Conduct AGM, adopt accounts</li>
        <li><strong>By 30th September:</strong> File Director KYC</li>
        <li><strong>By 29th October:</strong> File Form AOC-4 (within 30 days of AGM)</li>
        <li><strong>By 28th November:</strong> File Form MGT-7 (within 60 days of AGM)</li>
      </ol>

      <h2>Consequences of Non-Compliance</h2>
      <p>Failure to comply with annual filing requirements may result in:</p>
      <ul>
        <li>Monetary penalties on the company and officers in default</li>
        <li>Disqualification of directors</li>
        <li>Marking of DIN as "deactivated"</li>
        <li>Striking off of company name from the register (in case of prolonged default)</li>
        <li>Difficulty in obtaining loans, entering contracts, or conducting business</li>
      </ul>

      <h2>Additional Compliances</h2>
      <p>Depending on the company's activities and structure, additional compliances may include:</p>
      <ul>
        <li>Related party transaction disclosures</li>
        <li>Deposit-related compliances (if accepting deposits)</li>
        <li>CSR reporting (if CSR provisions apply)</li>
        <li>Secretarial audit report (for certain classes of companies)</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Maintain a compliance calendar and set reminders well in advance</li>
        <li>Ensure financial statements are finalized early to allow time for AGM and filings</li>
        <li>Keep statutory registers updated throughout the year</li>
        <li>Maintain proper documentation of board and general meetings</li>
        <li>Engage professional assistance for timely and accurate compliance</li>
      </ul>

      <p><em>Note: Companies Act provisions are subject to amendments and notifications. This article provides general educational information on annual ROC compliances and should not be relied upon for specific compliance decisions. Due dates may be extended by the government from time to time. Professional advice should be sought for ensuring complete compliance.</em></p>
    `,
  },
  'tds-compliance-primer': {
    title: 'TDS compliance: A primer for employers',
    category: 'Income Tax',
    date: '2025-11-05',
    readTime: '6 min read',
    content: `
      <p>Tax Deduction at Source (TDS) is a mechanism to collect income tax at the point of income generation. For employers, TDS compliance involves deducting tax from employee salaries and remitting it to the government. This primer covers key aspects of TDS compliance for employers.</p>

      <h2>What is TDS on Salaries?</h2>
      <p>Under Section 192 of the Income Tax Act, employers are required to deduct tax at source from salary payments to employees based on estimated annual income and applicable tax rates.</p>

      <h2>TDS Deduction Process</h2>

      <h3>1. Obtain Employee Information</h3>
      <ul>
        <li>PAN details of all employees</li>
        <li>Investment declarations for deductions under Chapter VI-A (80C, 80D, etc.)</li>
        <li>Details of other income and tax-saving investments</li>
        <li>Previous employer's Form 16 (for mid-year joiners)</li>
      </ul>

      <h3>2. Compute Annual Tax Liability</h3>
      <ul>
        <li>Estimate total annual salary (including all components)</li>
        <li>Allow standard deduction and other eligible deductions</li>
        <li>Apply tax rates based on chosen tax regime (old or new)</li>
        <li>Calculate monthly TDS to be deducted</li>
      </ul>

      <h3>3. Monthly TDS Deduction</h3>
      <ul>
        <li>Deduct TDS from salary payments each month</li>
        <li>Adjust deductions based on actual income and investment proofs</li>
        <li>Ensure minimum deduction if tax liability exists</li>
      </ul>

      <h2>TDS Deposit Requirements</h2>
      <p>Deducted TDS must be deposited with the government:</p>
      <ul>
        <li><strong>Due Date:</strong> 7th of the following month (for most deductors)</li>
        <li><strong>For March:</strong> 30th April</li>
        <li><strong>Method:</strong> Online payment through authorized banks using Challan 281</li>
        <li><strong>Late Payment:</strong> Attracts interest under Sections 201(1A) and potential penalty</li>
      </ul>

      <h2>Quarterly TDS Returns</h2>
      <p>Employers must file quarterly TDS returns in Form 24Q:</p>

      <table>
        <tr>
          <th>Quarter</th>
          <th>Period</th>
          <th>Due Date</th>
        </tr>
        <tr>
          <td>Q1</td>
          <td>April - June</td>
          <td>31st July</td>
        </tr>
        <tr>
          <td>Q2</td>
          <td>July - September</td>
          <td>31st October</td>
        </tr>
        <tr>
          <td>Q3</td>
          <td>October - December</td>
          <td>31st January</td>
        </tr>
        <tr>
          <td>Q4</td>
          <td>January - March</td>
          <td>31st May</td>
        </tr>
      </table>

      <h3>Form 24Q Contents</h3>
      <ul>
        <li>Employee-wise details of salary paid and TDS deducted</li>
        <li>Challan details of TDS deposited</li>
        <li>Employer and employee PAN</li>
        <li>Digital signature of authorized signatory</li>
      </ul>

      <h2>Form 16 Issuance</h2>
      <p>Form 16 is a TDS certificate issued to employees:</p>
      <ul>
        <li><strong>Timeline:</strong> On or before 15th June for the previous financial year</li>
        <li><strong>Parts:</strong> Part A (issued by TRACES after return filing) and Part B (salary and deduction details)</li>
        <li><strong>Purpose:</strong> Enables employees to file their income tax returns</li>
        <li><strong>Mandatory:</strong> Must be issued to all employees from whom TDS was deducted</li>
      </ul>

      <h2>Lower Deduction/No Deduction Certificates</h2>
      <p>Employees can obtain certificates from the Income Tax Department for:</p>
      <ul>
        <li><strong>Form 13:</strong> No TDS deduction (if total income is below taxable limit)</li>
        <li><strong>Lower Deduction:</strong> If actual tax liability is lower than standard deduction</li>
        <li><strong>Employer's Obligation:</strong> Deduct TDS as per certificate provisions</li>
      </ul>

      <h2>Common Compliance Issues</h2>
      <ul>
        <li>Incorrect PAN details leading to higher TDS deduction</li>
        <li>Delay in depositing TDS resulting in interest liability</li>
        <li>Mismatch between TDS deposited and TDS return filed</li>
        <li>Late filing of quarterly returns attracting late fees</li>
        <li>Non-issuance or delayed issuance of Form 16</li>
      </ul>

      <h2>Penalties and Consequences</h2>
      <ul>
        <li><strong>Non-deduction:</strong> Disallowance of expense under Section 40(a)(ia)</li>
        <li><strong>Late deposit:</strong> Interest at 1% to 1.5% per month</li>
        <li><strong>Late filing:</strong> Fee of ₹200 per day (subject to limits)</li>
        <li><strong>Incorrect information:</strong> Penalty under Section 271H</li>
      </ul>

      <h2>Best Practices for Employers</h2>
      <ul>
        <li>Collect investment declarations at the beginning of the financial year</li>
        <li>Verify employee PANs before processing salary</li>
        <li>Maintain a TDS compliance calendar</li>
        <li>Reconcile TDS deducted, deposited, and reported regularly</li>
        <li>File returns well before due dates to allow for corrections</li>
        <li>Issue Form 16 promptly to employees</li>
        <li>Keep records of challans, returns, and certificates for prescribed periods</li>
      </ul>

      <h2>Recent Developments</h2>
      <p>Employers should stay updated on:</p>
      <ul>
        <li>Changes in tax slabs and rates</li>
        <li>New tax regime provisions and employee choices</li>
        <li>Amendments to TDS rates and thresholds</li>
        <li>Updates to Form 24Q and filing procedures</li>
      </ul>

      <p><em>Note: TDS provisions are subject to amendments through Finance Acts and notifications. This article provides general educational information on TDS compliance for employers and should not be relied upon for specific compliance decisions. Professional assistance is recommended for ensuring accurate TDS computation and timely compliance.</em></p>
    `,
  },
  'statutory-audit-introduction': {
    title: 'Introduction to statutory audit requirements',
    category: 'Audit',
    date: '2025-10-28',
    readTime: '5 min read',
    content: `
      <p>Statutory audit is a legally mandated examination of financial records and statements of certain entities. This article provides an overview of when statutory audits are required, what they cover, and the general audit process.</p>

      <h2>What is Statutory Audit?</h2>
      <p>A statutory audit is an independent examination of an entity's financial statements, books of accounts, and records to express an opinion on whether the financial statements present a true and fair view of the entity's financial position and performance.</p>

      <h2>Who Requires Statutory Audit?</h2>

      <h3>Companies</h3>
      <p>Under the Companies Act, 2013:</p>
      <ul>
        <li>All companies (public, private, one-person companies) must have their accounts audited annually</li>
        <li>Audit must be conducted by a Chartered Accountant</li>
        <li>Applies regardless of turnover or profit/loss</li>
      </ul>

      <h3>Limited Liability Partnerships (LLPs)</h3>
      <p>LLPs require audit if:</p>
      <ul>
        <li>Contribution exceeds ₹25 lakhs, OR</li>
        <li>Annual turnover exceeds ₹40 lakhs</li>
      </ul>

      <h3>Other Entities</h3>
      <p>Statutory audit may also be required for:</p>
      <ul>
        <li>Trusts and societies (under specific laws or donor requirements)</li>
        <li>Cooperative societies (under cooperative laws)</li>
        <li>Certain partnership firms (under specific circumstances)</li>
      </ul>

      <h2>Scope of Statutory Audit</h2>
      <p>A statutory audit typically covers:</p>

      <h3>1. Financial Statements</h3>
      <ul>
        <li>Balance Sheet</li>
        <li>Profit and Loss Account</li>
        <li>Cash Flow Statement (if applicable)</li>
        <li>Notes to accounts</li>
      </ul>

      <h3>2. Books of Accounts</h3>
      <ul>
        <li>Ledgers and journals</li>
        <li>Bank statements and reconciliations</li>
        <li>Fixed asset registers</li>
        <li>Inventory records</li>
      </ul>

      <h3>3. Compliance Verification</h3>
      <ul>
        <li>Adherence to accounting standards</li>
        <li>Compliance with Companies Act provisions</li>
        <li>Proper maintenance of statutory registers</li>
        <li>Adequacy of internal controls</li>
      </ul>

      <h2>The Audit Process</h2>

      <h3>1. Planning</h3>
      <ul>
        <li>Understanding the entity's business and operations</li>
        <li>Assessing risk areas</li>
        <li>Determining materiality levels</li>
        <li>Planning audit procedures</li>
      </ul>

      <h3>2. Execution</h3>
      <ul>
        <li>Vouching and verification of transactions</li>
        <li>Physical verification of assets (where applicable)</li>
        <li>Confirmation from third parties (banks, debtors, creditors)</li>
        <li>Analytical procedures</li>
        <li>Testing of internal controls</li>
      </ul>

      <h3>3. Reporting</h3>
      <ul>
        <li>Drafting audit observations</li>
        <li>Discussion with management</li>
        <li>Finalizing audit report</li>
        <li>Signing and dating the report</li>
      </ul>

      <h2>Audit Report</h2>
      <p>The statutory auditor's report includes:</p>
      <ul>
        <li><strong>Opinion:</strong> Unqualified, qualified, adverse, or disclaimer</li>
        <li><strong>Basis for Opinion:</strong> Explanation of audit approach and standards followed</li>
        <li><strong>Key Audit Matters:</strong> Significant matters identified during audit (for certain entities)</li>
        <li><strong>Other Reporting:</strong> Compliance with Companies Act requirements, CARO reporting (if applicable)</li>
      </ul>

      <h3>Types of Audit Opinions</h3>
      <ul>
        <li><strong>Unqualified (Clean):</strong> Financial statements present a true and fair view</li>
        <li><strong>Qualified:</strong> True and fair view except for specific matters</li>
        <li><strong>Adverse:</strong> Financial statements do not present a true and fair view</li>
        <li><strong>Disclaimer:</strong> Auditor unable to obtain sufficient evidence to form an opinion</li>
      </ul>

      <h2>Auditor Appointment</h2>

      <h3>For Companies</h3>
      <ul>
        <li>First auditor appointed by Board of Directors within 30 days of incorporation</li>
        <li>Subsequent auditors appointed by shareholders in AGM</li>
        <li>Term: 5 years (subject to ratification, where applicable)</li>
        <li>Rotation: Mandatory for certain classes of companies</li>
      </ul>

      <h3>Eligibility</h3>
      <ul>
        <li>Must be a practicing Chartered Accountant</li>
        <li>Should not have any disqualifications under the Companies Act</li>
        <li>Must be independent of the company</li>
      </ul>

      <h2>Timeline for Audit</h2>
      <p>For companies with March year-end:</p>
      <ul>
        <li><strong>Finalization of Accounts:</strong> By May-June</li>
        <li><strong>Audit Completion:</strong> Before AGM (typically by August-September)</li>
        <li><strong>AGM:</strong> Within 6 months from year-end (by 30th September)</li>
        <li><strong>Filing with ROC:</strong> Within 30 days of AGM</li>
      </ul>

      <h2>Documents Required for Audit</h2>
      <p>Entities should provide auditors with:</p>
      <ul>
        <li>Books of accounts and financial statements</li>
        <li>Bank statements and reconciliations</li>
        <li>Fixed asset registers and depreciation schedules</li>
        <li>Loan agreements and investment documents</li>
        <li>Statutory registers and minutes of meetings</li>
        <li>Tax returns and assessment orders</li>
        <li>Agreements, contracts, and legal documents</li>
      </ul>

      <h2>Benefits of Statutory Audit</h2>
      <ul>
        <li>Provides assurance on financial statement accuracy</li>
        <li>Enhances credibility with stakeholders (banks, investors, regulators)</li>
        <li>Identifies weaknesses in internal controls</li>
        <li>Ensures compliance with accounting standards and laws</li>
        <li>Facilitates better financial management and decision-making</li>
      </ul>

      <h2>Common Audit Observations</h2>
      <ul>
        <li>Inadequate documentation for transactions</li>
        <li>Non-reconciliation of accounts</li>
        <li>Non-compliance with accounting standards</li>
        <li>Weak internal controls</li>
        <li>Delays in finalizing accounts</li>
      </ul>

      <p><em>Note: Audit requirements and procedures are governed by various laws and regulatory requirements, which are subject to amendments. This article provides general educational information on statutory audit and should not be relied upon for specific compliance or audit-related decisions. Professional consultation is recommended for understanding audit applicability and requirements.</em></p>
    `,
  },
  'accounting-standards-sme': {
    title: 'Accounting standards for small businesses',
    category: 'Accounting',
    date: '2025-10-20',
    readTime: '8 min read',
    content: `
      <p>Accounting standards provide a framework for preparing and presenting financial statements. For small and medium enterprises (SMEs) in India, understanding applicable accounting standards is essential for compliance and financial reporting. This guide covers the key frameworks relevant to SMEs.</p>

      <h2>Accounting Standards in India</h2>
      <p>India has multiple accounting frameworks:</p>
      <ul>
        <li><strong>Indian Accounting Standards (Ind AS):</strong> Converged with IFRS, mandatory for certain companies</li>
        <li><strong>Accounting Standards (AS):</strong> Existing standards for companies not required to follow Ind AS</li>
        <li><strong>Accounting Standards for Non-Corporate Entities (ASNCE):</strong> For partnership firms, LLPs, and other non-corporate entities</li>
      </ul>

      <h2>Applicability to SMEs</h2>

      <h3>Companies (Private Limited, Public Limited)</h3>
      <p><strong>Ind AS Applicability:</strong></p>
      <ul>
        <li>Listed companies and their subsidiaries</li>
        <li>Unlisted companies with net worth ≥ ₹250 crores (voluntary for smaller companies)</li>
        <li>Holding, subsidiary, or associate companies of Ind AS companies</li>
      </ul>

      <p><strong>AS Applicability:</strong></p>
      <ul>
        <li>Companies not required to follow Ind AS</li>
        <li>Most SME companies fall under this category</li>
      </ul>

      <h3>Non-Corporate Entities</h3>
      <p>Partnership firms, LLPs, sole proprietorships, and trusts follow:</p>
      <ul>
        <li>Accounting Standards for Non-Corporate Entities (ASNCE), or</li>
        <li>Accounting Standards (AS) on a voluntary basis</li>
      </ul>

      <h2>Key Accounting Standards (AS) for SMEs</h2>

      <h3>AS 1: Disclosure of Accounting Policies</h3>
      <ul>
        <li>Requires disclosure of significant accounting policies</li>
        <li>Policies should be appropriate to the entity's circumstances</li>
        <li>Changes in policies must be disclosed with impact</li>
      </ul>

      <h3>AS 2: Valuation of Inventories</h3>
      <ul>
        <li>Inventories valued at lower of cost or net realizable value</li>
        <li>Cost determination methods: FIFO, weighted average</li>
        <li>Disclosure of inventory valuation method required</li>
      </ul>

      <h3>AS 10: Property, Plant and Equipment</h3>
      <ul>
        <li>Fixed assets recorded at cost</li>
        <li>Depreciation charged systematically over useful life</li>
        <li>Revaluation permitted (with disclosure)</li>
      </ul>

      <h3>AS 11: Effects of Changes in Foreign Exchange Rates</h3>
      <ul>
        <li>Foreign currency transactions recorded at exchange rate on transaction date</li>
        <li>Monetary items restated at year-end rates</li>
        <li>Exchange differences recognized in profit and loss</li>
      </ul>

      <h3>AS 13: Accounting for Investments</h3>
      <ul>
        <li>Current investments at lower of cost or fair value</li>
        <li>Long-term investments at cost (unless permanent diminution)</li>
        <li>Classification and disclosure requirements</li>
      </ul>

      <h3>AS 22: Accounting for Taxes on Income</h3>
      <ul>
        <li>Recognition of current and deferred tax</li>
        <li>Deferred tax on timing differences</li>
        <li>Disclosure of tax reconciliation</li>
      </ul>

      <h2>Simplified Framework for Small Entities</h2>
      <p>Very small entities may adopt simplified accounting practices:</p>
      <ul>
        <li>Cash basis accounting (for entities not requiring accrual basis)</li>
        <li>Simplified depreciation schedules</li>
        <li>Reduced disclosure requirements (subject to regulatory approval)</li>
      </ul>

      <h2>Transition from AS to Ind AS</h2>
      <p>If an SME becomes subject to Ind AS requirements:</p>
      <ul>
        <li>Prepare opening balance sheet as per Ind AS</li>
        <li>Reconcile equity and profit from AS to Ind AS</li>
        <li>Apply Ind AS 101 (First-time Adoption) provisions</li>
        <li>Provide comparative information</li>
      </ul>

      <h2>Key Differences: AS vs Ind AS</h2>

      <table>
        <tr>
          <th>Aspect</th>
          <th>AS</th>
          <th>Ind AS</th>
        </tr>
        <tr>
          <td>Revenue Recognition</td>
          <td>AS 9 (risk-reward transfer)</td>
          <td>Ind AS 115 (5-step model)</td>
        </tr>
        <tr>
          <td>Financial Instruments</td>
          <td>AS 13, AS 30, AS 31</td>
          <td>Ind AS 109 (fair value, impairment)</td>
        </tr>
        <tr>
          <td>Leases</td>
          <td>AS 19 (operating vs finance)</td>
          <td>Ind AS 116 (single model)</td>
        </tr>
        <tr>
          <td>Presentation</td>
          <td>Schedule III format</td>
          <td>Ind AS 1 (more detailed)</td>
        </tr>
      </table>

      <h2>Compliance Requirements</h2>

      <h3>For Companies</h3>
      <ul>
        <li>Financial statements must comply with applicable accounting standards</li>
        <li>Auditor's report must state compliance with standards</li>
        <li>Non-compliance must be disclosed with reasons and financial impact</li>
      </ul>

      <h3>For Non-Corporate Entities</h3>
      <ul>
        <li>Compliance with ASNCE or AS (if adopted)</li>
        <li>Disclosure of accounting policies followed</li>
        <li>Auditor's report (if audit is required) should mention compliance</li>
      </ul>

      <h2>Common Challenges for SMEs</h2>
      <ul>
        <li>Understanding complex standard requirements</li>
        <li>Implementing deferred tax accounting</li>
        <li>Fair value measurements (under Ind AS)</li>
        <li>Maintaining adequate documentation</li>
        <li>Keeping updated with amendments to standards</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Document accounting policies clearly</li>
        <li>Ensure consistency in application of policies</li>
        <li>Stay updated on amendments to accounting standards</li>
        <li>Maintain proper books and records to support financial statements</li>
        <li>Engage professional assistance for complex transactions</li>
        <li>Review financial statements for compliance before finalization</li>
      </ul>

      <h2>Resources for SMEs</h2>
      <ul>
        <li><strong>ICAI:</strong> Publishes accounting standards and guidance notes</li>
        <li><strong>MCA:</strong> Notifies applicable standards for companies</li>
        <li><strong>Professional Bodies:</strong> Provide training and updates on standards</li>
        <li><strong>Accounting Software:</strong> Many tools incorporate standard-compliant templates</li>
      </ul>

      <h2>Future Outlook</h2>
      <p>Developments to watch:</p>
      <ul>
        <li>Potential expansion of Ind AS applicability to more companies</li>
        <li>Simplification initiatives for small entities</li>
        <li>Convergence with international standards</li>
        <li>Technology-driven compliance and reporting</li>
      </ul>

      <p><em>Note: Accounting standards are subject to amendments and new pronouncements by the Institute of Chartered Accountants of India (ICAI) and notifications by the Ministry of Corporate Affairs (MCA). This article provides general educational information on accounting standards applicable to SMEs and should not be relied upon for specific accounting or compliance decisions. Professional advice should be sought for ensuring proper application of accounting standards.</em></p>
    `,
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articles[params.slug];

  if (!article) {
    return {
      title: 'Article Not Found',
      alternates: {
        canonical: `${siteUrl}/resources`,
      },
    };
  }

  return {
    title: article.title,
    description: article.title + '. Educational tax and compliance insights from M MANI & CO, chartered accountants in Bengaluru.',
    openGraph: {
      title: article.title,
      description: article.title,
      type: 'article',
      url: `${siteUrl}/resources/insights/${params.slug}`,
    },
    alternates: {
      canonical: `${siteUrl}/resources/insights/${params.slug}`,
    },
  };
}

export default function InsightArticlePage({ params }: PageProps) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <div className="container-custom max-w-4xl py-20 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-neutral-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/resources?tab=insights" className="text-primary-700 hover:text-primary-800 font-medium">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero */}
      <PageHero
        title={article.title}
        subtitle={`${article.category} • ${article.readTime} • ${new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        parentLink={{
          href: "/resources?tab=insights",
          label: "Back to Insights"
        }}
      />

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div
            className="prose prose-lg prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Need Professional Assistance?
          </h2>
          <p className="text-neutral-600 mb-6">
            For personalized guidance on {article.category.toLowerCase()} matters, you may reach out to us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
