import { 
  BookOpen, Shield, Gavel, Scale, Briefcase, FileSearch, 
  Handshake, FileText, SplitSquareHorizontal, Users, Clock, 
  RotateCcw, AlertTriangle, Network, Paperclip, Library
} from 'lucide-react';

// Edit this file to update titles, sections, and content.
// Add new sections by adding objects to the array.
// Delete sections by removing objects.
// Change icons by replacing the icon property value.
export const SECTIONS = [
  { 
    id: 'intro', 
    title: 'Introduction', 
    icon: BookOpen, 
    content: `# **Criminal Court Navigation Minicourse**

### **Daviess County, Kentucky | Civic Education Resource**

**Disclaimer (appears throughout):** This course explains criminal court procedures in Daviess County, Kentucky. It is not legal advice. It does not recommend specific actions. Every criminal case is unique and requires consultation with a licensed attorney. This material describes how the system operates based on Kentucky law and local court rules.` 
  },
  {
    id: 'mod0',
    title: 'Pre-Arrest Rights',
    icon: AlertTriangle,
    content: `# **PRE-ARREST PRACTICAL RIGHTS**

## **What This Explains**

Your constitutional and statutory rights *before* an arrest occurs — during police encounters, investigatory stops, and traffic stops. Understanding these rights affects whether evidence can later be suppressed and whether your statements can be used against you.

---

## **The Three-Tier Framework**

Kentucky courts apply federal Fourth Amendment doctrine to classify every law enforcement encounter into one of three tiers. The tier determines what the officer can legally do and what rights you have.

**Tier One: Consensual Contact**

* No reasonable suspicion required — officer may approach anyone in a public place for any reason
* You may decline to answer and walk away; no seizure exists unless a reasonable person would not feel free to leave
* *Commonwealth v. Banks*, 68 S.W.3d 347 (Ky. 2001): officers retain "the same freedom of movement that the rest of society enjoys"
* *Baker v. Commonwealth*, 5 S.W.3d 142 (Ky. 1999): a request alone — including asking someone to remove their hands from their pockets — is **not** a seizure; a seizure begins when compliance is *compelled*, not merely requested

**Tier Two: Investigatory Detention (Terry Stop)**

* Requires reasonable, articulable suspicion — more than a hunch, less than probable cause — that criminal activity is afoot
* Officer may briefly detain you to confirm or dispel that suspicion
* Officer may conduct a pat-down for weapons if there is reasonable suspicion you are armed and dangerous
* Duration is limited to what is reasonably necessary
* *Commonwealth v. Banks*: leading Kentucky Supreme Court application of the Terry doctrine

**Tier Three: Arrest**

* Requires probable cause supported by specific articulable facts
* Triggers full constitutional protections: right to counsel (RCr 2.14(1)), right to remain silent (Fifth Amendment; Kentucky Constitution Section 11), right to be brought before a judicial officer without unnecessary delay (RCr 3.02)

---

## **Kentucky Stop-and-Identify Law**

**Kentucky is NOT a stop-and-identify state.**

The Kentucky Supreme Court has held that Kentucky does not have a stop-and-identify statute. A person lawfully detained under Terry *may decline to identify themselves* and **cannot be arrested for that refusal alone**.

What Kentucky *does* have:

* **KRS 523.110** — Giving Peace Officer False Identifying Information (Class B misdemeanor): makes it a crime to give a peace officer a false name, address, or date of birth when lawfully stopped. The statute imposes **no duty to identify**; it only criminalizes lying if you choose to speak.

**The one exception — traffic stops:**

* **KRS 186.510**: Drivers must carry and display their operator's license upon demand to a peace officer
* **KRS 186.620**: Failure to display is a misdemeanor (up to 90 days, $100–$250 fine, possible vehicle impoundment)
* This obligation applies to *drivers only*. Passengers are not required to produce ID absent independent reasonable suspicion directed at them.

---

## **Rights During Traffic Stops**

**Documents you must produce (KRS 186.510, 186.020, KRS Ch. 304):**
1. Driver's license
2. Vehicle registration
3. Proof of insurance

Failure to produce any of these is a separate violation independent of the reason for the stop.

**You do NOT have to answer investigatory questions:**

The Fifth Amendment applies during traffic stops. *Berkemer v. McCarty*, 468 U.S. 420 (1984): traffic stops are Terry stops for Miranda purposes, meaning you are not automatically "in custody" — but you still have the right not to answer questions about your destination, travel history, or activities.

**Consent searches:**

* Clearly state: *"I do not consent to a search."*
* Refusal to consent **cannot** by itself supply probable cause or justify continued detention — *Ohio v. Robinette*, 519 U.S. 33 (1996); *United States v. Buchanon*, 72 F.3d 1217 (6th Cir. 1995)
* Oral consent is legally sufficient and can be withdrawn at any time before or during a search

**"Am I free to go?"**

* You may ask this directly
* Under *Rodriguez v. United States*, 575 U.S. 348 (2015), a stop may **not** be extended beyond the time needed to address the initiating violation without independent reasonable suspicion
* If the officer cannot articulate reasonable suspicion, further detention is unlawful and evidence obtained may be suppressed

---

## **Right to Record Police**

Recording police officers performing their duties in a public place is a First Amendment right recognized by a majority of federal circuits (1st, 3rd, 5th, 7th, 9th, 10th, 11th).

**Kentucky-specific limitation:** The Sixth Circuit — which covers Kentucky — has **not** issued a definitive published ruling establishing this as a "clearly established" right for qualified immunity purposes. This means an officer who stops you from recording may still successfully invoke qualified immunity in a civil lawsuit.

* **KRS 526.010 / 526.020**: Kentucky is a one-party consent state for recordings. Recording a conversation to which you are a party is lawful.
* **KRS 61.168**: Body camera footage from an encounter is generally accessible via Open Records request, subject to exceptions for ongoing investigations.
* **KRS 61.870–61.884 (Open Records Act)**: An officer's name, rank, and badge number are public records you may request.

---

## **Invoking Your Rights**

**Right to remain silent:**

Say clearly: *"I want to remain silent."*

Silence alone is not sufficient — *Berghuis v. Thompkins*, 560 U.S. 370 (2010) requires an unambiguous verbal invocation. Once invoked, interrogation must cease.

**Right to counsel:**

Say clearly: *"I want a lawyer."*

Under *Edwards v. Arizona*, 451 U.S. 477 (1981), once counsel is invoked, all interrogation must stop until counsel is present or you re-initiate communication.

Both rights are independently operative. Invoking either is sufficient.

---

## **Non-Resistance**

Do **not** physically resist even an unlawful arrest. The remedy for an unlawful arrest is:
* Suppression of evidence obtained
* Civil rights lawsuit

Physical resistance creates independent criminal exposure under **KRS 520.090** (Resisting Arrest) and **KRS 519.020** (Obstructing Governmental Operations). The civil remedy is preserved whether or not you resist — and physical resistance eliminates your tactical and legal advantage.

After any encounter, document immediately: time, location, officer name and badge number, agency, what was said, what was searched, and what was taken.

---

## **Traffic Stop Statistics (National Context)**

* 2022: ~49.2 million U.S. residents (19%) had police contact in the prior 12 months — down from 24% in 2018
* Traffic stops fell from ~20 million (2018) to ~12.4 million (2022), a 38% decline
* Black drivers are searched or arrested at rates more than double other groups (BJS data, consistent 2008–2022)
* A study of nearly 100 million stops found that Black drivers were less likely to be stopped after sunset, when race is harder to observe — consistent with racial bias in daytime stop decisions (*Pierson et al., Nature Human Behaviour, 2020*)

*Source: BJS Contacts Between Police and the Public, 2022 (NCJ 307527)*

---

## **Connection to The Arrest**

Understanding pre-arrest rights directly affects arrest outcomes. Unlawful stops, unlawful extensions of traffic stops, coerced consent searches, and Miranda violations all create grounds for suppression motions after arrest. The conduct during the pre-arrest encounter becomes part of the record reviewed at the suppression hearing.`
  },
  {
    id: 'mod1',
    title: 'The Arrest',
    icon: Shield,
    content: `# **THE ARREST**



Establish law enforcements authority to arrest, what happens during the arrest, what comes after, and general information you should know

---

## **Legal Definition: Arrest vs. Detention**

**Detention (Investigatory Stop — Terry Stop)**

* Less than arrest; based on *reasonable suspicion* (not probable cause)  
* Articulable facts that criminal activity is afoot  
* Officer may temporarily detain to investigate  
* Duration limited to time necessary to confirm or dispel suspicion  
* Officer may conduct limited pat-down ("frisk") if reasonable suspicion person is armed  
* Person not "under arrest" during investigatory stop — not free to leave but not in custody

**Arrest**

* Takes person into custody against their will  
* Requires *probable cause* — facts and circumstances that would lead a reasonable officer to believe a crime has been or is being committed and this person committed it  
* Triggers full constitutional protections (right to counsel, Miranda, etc.)  
* Can be with warrant or without warrant (see below)  
* Person is not free to leave; refusal to comply is obstruction

**Practical Distinction**

* If officer says "you're not under arrest but I need you to stay" — investigatory detention  
* If officer says "you're under arrest" or handcuffs person and places in patrol car — arrest  
* Courts look at whether a reasonable person would feel free to leave

---

## **Arrest With Warrant**

**Complaint Process (RCr 2.02)**

* Officer or complainant files written complaint stating essential facts constituting the offense  
* Complaint must be under oath/affirmation, signed by complaining party  
* Presented to judge, trial commissioner, or county attorney for probable cause determination  
* Complaint informs the judge of the reason the accused should be brought before court

**Warrant Issuance (RCr 2.04; Section 10, Kentucky Constitution)**

* Judge examines complaint and, if necessary, witnesses  
* If probable cause found, issues arrest warrant OR summons (summons = appears voluntarily; warrant = compelled)  
* Warrant requirements:  
  * Must be in writing  
  * Issued in name of Commonwealth of Kentucky  
  * Signed by judge with title of office  
  * Dated  
  * Must state the offense charged  
  * Must name or describe defendant "as nearly as may be"  
  * Must command officer to arrest and bring defendant before court

**Service of Warrant (RCr 2.06)**

* Any peace officer may execute an arrest warrant  
* Officer need not have warrant in physical possession at time of arrest  
* Must have warrant and underlying complaint in possession or obtain them "as soon thereafter as practicable"  
* Copy of warrant and complaint must be served on accused at time of arrest or as soon as practicable thereafter

**Defective Warrants (RCr 2.08)**

* Defects in form do not automatically result in discharge or dismissal  
* Warrants can be amended to remedy formal defects  
* Substantive constitutional defects (no probable cause) are different — grounds for suppression

**Bench Warrants (RCr 2.05)**

* Issued "from the bench" during proceedings  
* No supporting affidavit required  
* Issued when: witness fails to appear pursuant to subpoena, defendant fails to appear pursuant to summons  
* Arrest and bring defendant or witness before court

---

## **Arrest Without Warrant (RCr 2.10; KRS 431.005)**

**Felony Arrests Can Occur Without a Warrant if**

* Felony committed in officer's presence  
* Officer has probable cause to believe person committed a felony (even if not witnessed by officer)  
* Officer has reasonable grounds to believe felony has been committed AND probable cause to believe this person committed it

**Misdemeanor Arrests Can Occur Without a Warrant if**

* Misdemeanor committed in officer's presence  
* Specific statutory authorization exists (examples):  
  * Domestic violence (even without officer witnessing assault)  
  * Protective order violations  
  * DUI  
  * Certain other statutory exceptions

**Citation in Lieu of Arrest (KRS 431.005)**

* Officer may issue citation instead of physical arrest for misdemeanors  
* Requires reasonable grounds that person will appear in court  
* If defendant fails to appear: complaint filed, arrest warrant issued  
* Physical arrest + citation: officer marks "ARRESTED" on citation instead of court date

**Post-Arrest Complaint Requirement (RCr 3.02)**

* When arrest made without warrant, post-arrest complaint must be filed promptly  
* Complaint provides charging instrument for warrantless arrests  
* Must state essential facts constituting the offense  
* Informs judge of reason accused is before court

---

## **Constitutional Framework Governing Arrest**

**Fourth Amendment (U.S. Constitution)**

* Protection against unreasonable searches and seizures  
* Warrants must particularly describe persons to be arrested and places to be searched  
* Probable cause required; must be supported by oath or affirmation

**Section 10 (Kentucky Constitution)**

* Parallel state protection  
* Search warrants must particularly describe persons, places, and items to be seized  
* Kentucky Constitution offers protections at least equivalent to Fourth Amendment; sometimes greater

**Exclusionary Rule**

* Evidence obtained through unconstitutional arrest or search is inadmissible at trial  
* Purpose: deter police misconduct  
* "Fruit of the poisonous tree" doctrine: evidence discovered as result of unlawful arrest also suppressible  
* Exceptions: inevitable discovery, independent source, attenuated connection

---

## **Booking Procedures**

**Location (Daviess County)**

* Daviess County Detention Center handles booking for county arrests  
* Owensboro Police Department may handle some city arrests

**Booking Process:**

* Fingerprinting (rolled and digital)  
* Photographing (mugshot)  
* Criminal history check (local, statewide via KYOPS, national via NCIC)  
* Medical screening (identify medical conditions, injuries, medications)  
* Property inventory (all personal belongings documented, receipted, secured)  
* Assignment to housing unit  
* Jail classification assessment (security level, special housing needs)

**Evidence Handling at Arrest (KRS 67; KRS 95.845)**

* All property confiscated as evidence must be properly marked, labeled, packaged  
* Submitted to property room by end of officer's tour of duty  
* Entered into evidence management system  
* Chain of custody documentation maintained from seizure through disposition  
* Firearms: must be rendered safe, verified stolen status through KYOPS/NCIC, ammunition packaged separately

---

## **Right to Contact Attorney (RCr 2.14(1))**

**The Rule**

* Any person taken into custody must be allowed to communicate with an attorney "as soon as practicable"  
* This is a mandatory procedural requirement, not a courtesy  
* Denial creates grounds for suppression of any statements made

**Practical Implementation**

* Upon booking at detention center, defendant must be afforded reasonable opportunity to contact:  
  * Their attorney  
  * Family members who can contact attorney  
  * Public defender's office  
* Phone access required; requests cannot be indefinitely delayed

**Miranda Warning (Separate Requirement)**

* Before custodial interrogation, officer must advise:  
  * Right to remain silent  
  * Anything said can be used against defendant in court  
  * Right to attorney during questioning  
  * If cannot afford attorney, one will be appointed before questioning  
* Miranda applies to custodial interrogation — not required for booking questions (name, address, DOB)  
* Defendant may waive Miranda rights (must be knowing, intelligent, voluntary)  
* Invocation of right to silence or right to counsel must stop questioning

---

## **Pretrial Services Interview**

**Timing**

* Must occur within 12 hours of arrest  
* Conducted by pretrial services officer at detention center

**Interview Covers**

* Nature of current charge(s)  
* Criminal history (local, state, federal)  
* Prior failures to appear at court  
* Current residential situation (stability, length of residence)  
* Employment status and history  
* Family ties in community  
* Substance abuse history  
* Mental health status and treatment history  
* Outstanding warrants or pending charges in other jurisdictions

**Risk Assessment Tool**

* Pretrial services uses validated risk assessment instrument  
* Score evaluates:  
  * Likelihood of appearing at all future court dates  
  * Danger to public safety  
  * Likelihood of new criminal activity during pretrial period  
* Produces low/moderate/high risk classification

**Output**

* Written recommendation to judge: release conditions, bond amount, or detention  
* Presented at initial appearance/arraignment  
* Influences judge's bail decision but does not bind judge

---

## **Body Camera Evidence Created at Arrest**

*(Derived from department body camera policy)*

* Officers equipped with BWV must activate camera when receiving call for service, prior to arrival at scene  
* Must record: all arrests, all searches, all seizures of evidence, all consent to search requests, all Miranda warnings and responses from in-custody suspects  
* Camera captures: arrest scene, defendant statements, witness statements, evidence collection  
* Video footage is discoverable (must be turned over to defense under RCr 7.24)  
* Failure to activate or preserve footage: may create inference or grounds for suppression argument

---

## **Key Terms**

* **Probable cause**: facts that would lead a reasonable officer to believe a crime occurred and this person committed it  
* **Reasonable suspicion**: lower standard; articulable facts suggesting criminal activity is afoot  
* **Detention**: temporary stop; person not free to leave but not under arrest  
* **Arrest**: taking into custody against will; requires probable cause  
* **Warrant**: court-issued document authorizing arrest  
* **Booking**: administrative processing into custody  
* **Pretrial services**: court unit that assesses and monitors defendants pending trial  
* **Miranda warning**: advisement of rights before custodial interrogation

## **Connection to Next Phase**

The arrest creates the jurisdictional basis for court proceedings. The post-arrest complaint or indictment becomes the charging document. The pretrial services interview produces a recommendation that influences initial appearance outcomes. The booking documentation and body camera footage become part of the discovery record.`
  },
  {
    id: 'mod2',
    title: 'Initial Appearance',
    icon: Gavel,
    content: `# **INITIAL APPEARANCE**



How arraignment works in district court vs. circuit court, and how the plea entered at arraignment determines the procedural path forward.

---

## **Timing Requirements**

**"Without Unnecessary Delay" Standard (RCr 3.02)**

* Person arrested must be taken before a judge without unnecessary delay  
* Constitutional requirement (Section 11, Kentucky Constitution; Sixth Amendment)  
* Ensures prompt judicial determination of whether detention is lawful  
* No specific hour limit stated, but delays of more than 24-48 hours without judicial review become constitutionally problematic

**If No Judge Immediately Available**

* All arrest documents given to jailer  
* Jailer must give documents to clerk on or before next business day (RCr 3.02(3)(4))  
* Defendant brought before judge at earliest opportunity  
* 24-hour bond review by pretrial services as interim measure

**Video Arraignment**

* Permissible under RCr 8.02 and RCr 8.28  
* Must be functional equivalent of in-person appearance  
* Defendant, judge, and attorneys can see and hear each other  
* *Commonwealth v. Ingram*, 46 S.W.3d 569 (Ky. 2001) — authorizes video arraignment

---

## **Rights Advisement at Initial Appearance**

**Judge must inform defendant of all of the following:**

**1. The Charges**

* Nature and cause of accusation explained in understandable terms  
* Defendant entitled to copy of complaint or indictment  
* If charges are confusing or complex, judge must ensure defendant understands what they're accused of

**2. Right to Counsel (KRS 31.110(1)(a); Sixth Amendment; Section 11, KY Constitution)**

* Right to be represented by attorney at all critical stages  
* *Argersinger v. Hamlin*, 407 U.S. 25 (1972): if charge could result in any confinement, court must appoint counsel if defendant cannot afford one  
* Appointment determination made based on indigency showing  
* Even partial showing of financial inability triggers right to appointment process  
* Right to consult with attorney before making any decisions at hearing

**3. Right to Remain Silent (Fifth Amendment; Section 11, KY Constitution)**

* Defendant has no obligation to make any statement  
* Anything said can and will be used against defendant  
* Right against self-incrimination — absolute at this stage  
* Judge advises defendant to say nothing until they have spoken with an attorney

**4. Right to Preliminary Hearing (felonies only)**

* Defendant in custody on felony charge not yet indicted: preliminary hearing within 10 days of arraignment (RCr 3.14)  
* Defendant released on bond: preliminary hearing within 20 days  
* Purpose: determine whether probable cause exists to continue holding or charging defendant  
* Defendant may waive preliminary hearing

**5. Right to Reasonable Bail (RCr 3.05)**

* Judge must consider whether defendant should be released  
* Court reviews bond and considers whether conditions are appropriate  
* Constitutional protection against excessive bail (Eighth Amendment; Section 16, KY Constitution)

**6. Presumption of Innocence**

* Defendant presumed innocent  
* Commonwealth bears entire burden to prove guilt beyond reasonable doubt (KRS 500.070(1))  
* No inference of guilt from the fact of arrest or the fact of charges being filed

---

## **District Court vs. Circuit Court Arraignment**

**District Court Arraignment (Misdemeanors and Pre-Indictment Felonies)**

* Handles all misdemeanor arraignments  
* Handles initial appearance for felony arrests before grand jury indictment  
* Misdemeanors prosecuted by County Attorney  
* District court *cannot* accept guilty plea to felony — always enters "not guilty" and transfers case to circuit court  
* Preliminary hearing on felony charges held in district court

**Circuit Court Arraignment (Felonies Post-Indictment)**

* After grand jury returns indictment, case moves to circuit court  
* Timing: C6 Local Rule 2.01 — arraignments and initial pretrial conferences held commencing 8:30 AM on first Thursday and Friday next after beginning of trial period  
* Defendant must be personally present (cannot waive appearance at circuit court arraignment)  
* Rights advisement repeated for emphasis and for the record  
* Case assigned to Division I or Division II (Daviess Circuit Court operates two divisions)

---

## **Plea Entry Mechanics**

**Not Guilty Plea**

* Most defendants enter "not guilty" at arraignment regardless of actual intent  
* Preserves all rights: discovery, motions, negotiations, trial  
* Does not mean defendant will go to trial — vast majority eventually plead guilty  
* Simply maintains procedural options  
* Triggers pretrial process: discovery, negotiations, motion practice

**Guilty Plea at Arraignment**

* Possible but unusual unless pre-negotiated plea agreement exists  
* Requires full Boykin waiver (*Boykin v. Alabama*, 395 U.S. 238 (1969)):  
  * Waiver must be knowing, intelligent, and voluntary  
  * Court must advise defendant of rights being waived: right to trial, right to confront witnesses, right against self-incrimination, right to compel witnesses, right to appeal  
  * Court establishes factual basis for plea (defendant admits facts supporting each element)  
  * Defendant confirms no coercion or undue influence  
  * Defendant understands consequences: sentencing range, collateral consequences

**Guilty But Mentally Ill Plea (KRS 504.120)**

* Available option; defendant found guilty but court recognizes mental illness at time of offense  
* Sentenced as if regular guilty verdict, but receives mental health treatment during incarceration  
* Not a defense; does not reduce culpability

**Alford Plea**

* Defendant pleads guilty while maintaining factual innocence  
* Permissible where defendant acknowledges strong evidence of guilt and makes intelligent choice to plead guilty to avoid risk of greater sentence  
* *North Carolina v. Alford*, 400 U.S. 25 (1970)  
* Court still establishes factual basis from record (not from defendant's admission)

---

## **Case Assignment and Scheduling**

**After "Not Guilty" Plea:**

* Case assigned to trial docket  
* Discovery initiated  
* Pretrial conference date set  
* Defense counsel appointed or retained counsel enters appearance  
* Bond conditions set or continued from initial appearance

**Daviess County Circuit Court Scheduling (C6 Local Rule 2.01)**

* Arraignments and initial pretrial conferences: 8:30 AM, first Thursday and Friday after beginning of each trial period  
* Two-division system: Division I and Division II alternate trial periods  
* Criminal motions heard Monday, Wednesday, Thursday at 8:30 AM (C6 Local Rule 2.02)

---

## **Key Terms**

* **Arraignment**: formal court appearance where charges are read and plea is entered  
* **Initial appearance**: first appearance before judge after arrest  
* **Preliminary hearing**: hearing to determine probable cause for felony charges  
* **Boykin waiver**: formal waiver of constitutional rights required before guilty plea accepted  
* **Alford plea**: guilty plea while maintaining factual innocence  
* **Indigency**: financial inability to afford an attorney

## **Connection to Next Phase**

Arraignment plea determines the procedural path. "Not guilty" triggers the pretrial process — discovery, negotiations, motions. "Guilty" moves directly toward sentencing (with presentence investigation). The pretrial services recommendation heavily influences what happens with bail at this appearance.`
  },
  {
    id: 'mod3',
    title: 'Bail Determination',
    icon: Scale,
    content: `# **BAIL DETERMINATION - RELEASE VS. DETENTION**



How judges decide whether to release defendants pending trial, what factors drive that decision, what types of release exist, and what conditions can be attached. Covers the 2025 statewide pretrial release schedule and Daviess County-specific practice.

---

## **Standard Pretrial Release Schedule (Supreme Court Order 2025-22)**

**The Schedule**

* Defendants assessed as low risk for failure to appear AND low or moderate risk for new criminal activity are presumptively eligible for release on recognizance under statewide schedule  
* Pretrial services risk assessment score determines initial eligibility  
* Schedule provides standard release conditions without requiring individual judicial hearing for qualifying defendants

**Defendants Ineligible for Schedule Release:**

* Charges listed in specified violent offense schedule (Appendix A of Order — serious violent crimes)  
* Alcohol intoxication in public place (released per separate specific protocol)  
* DUI 1st offense (detained minimum 6 hours before release)  
* DUI causing death or serious physical injury (not eligible for schedule release)  
* Indictment warrant arrests (judge reviews individually)  
* Extradited defendants  
* Defendants who decline pretrial services interview  
* Contempt of court arrests  
* Violation of existing release conditions  
* Offenses committed during declared emergency, disaster, or civil unrest  
* Charges with an alleged victim (special no-contact condition imposed automatically)

**Effect**

* Eligible defendants processed through schedule without waiting for judge  
* Saves jail time for low-risk defendants  
* Pretrial services implements conditions  
* Judge still reviews at first appearance

---

## **Judicial Discretion Factors (RCr 4.02; KRS 431.066)**

**For defendants not eligible under schedule or requiring judicial review, judge considers:**

**Nature and Circumstances of Offense**

* Severity of charges  
* Alleged use of violence or weapons  
* Number and type of charges  
* Whether victim was vulnerable (elderly, child, domestic partner)

**Weight of Evidence**

* Strength of Commonwealth's case  
* Credibility of witnesses  
* Physical evidence available  
* Video evidence

**Criminal Record**

* Prior convictions (felony vs. misdemeanor)  
* Prior failures to appear at court  
* Outstanding warrants  
* Pending charges in other jurisdictions  
* Pattern of similar conduct

**Flight Risk Assessment**

* Prior failures to appear  
* Ties to community (see below)  
* Whether defendant has assets or contacts in other jurisdictions  
* Whether defendant has passport or travel history

**Danger to Community**

* History of violence  
* Threats made to witnesses or victims  
* Nature of current charge  
* Mental health factors  
* Substance abuse factors

**Ties to Community**

* Length of residence in Daviess County  
* Employment stability and type  
* Family relationships (spouse, children, parents)  
* Homeownership or stable housing  
* Community involvement  
* Educational enrollment

---

## **Bond Types**

**Release on Own Recognizance (ROR)**

* Defendant released on signature only  
* No money posted  
* Promise to appear at all future court dates  
* May have conditions attached (reporting, no-contact, etc.)  
* Violation: arrest, bond revocation, potential additional charges

**Unsecured Bond**

* Defendant signs promise to pay specified amount if fails to appear  
* No money posted upfront  
* Essentially a financial penalty threat for non-appearance  
* Amount set by judge

**Cash Bond**

* Full dollar amount must be posted with court before release  
* Posted by defendant, family, or friends  
* Returned (minus court costs) at conclusion of case if defendant appears at all hearings  
* Forfeited if defendant fails to appear  
* Note: Kentucky does *not* permit commercial bail bonding (no bail bondsmen)

**Property Bond**

* Real property pledged as security  
* Property value must exceed bond amount  
* Deed filed with court  
* Property subject to forfeiture if defendant fails to appear

**Conditional Release**

* Release on any of the above bond types with specific conditions attached:  
  * GPS ankle monitoring  
  * Home incarceration (defendant confined to residence except for work, medical, court)  
  * Substance abuse treatment as condition  
  * Mental health treatment as condition  
  * Regular check-ins with pretrial services  
  * Random drug/alcohol testing  
  * No contact with alleged victim or witnesses  
  * Stay-away orders from specific locations  
  * Surrender of passport  
  * Surrender of firearms  
  * Travel restrictions

---

## **Special Provisions for Domestic Violence and Sexual Assault (KRS 431.064)**

**Before releasing defendant charged with:**

* KRS 508 (assault offenses)  
* KRS 510 (sex crimes)  
* Protective order violations

**Court must:**

* Review facts of arrest and detention  
* Make findings on the record  
* Consider imposing conditions protecting alleged victim  
* Available conditions: no-contact orders, stay-away provisions, GPS monitoring, surrender of firearms, substance abuse testing, no alcohol consumption

**24-Hour Bond Review**

* If defendant not released under pretrial schedule and judge not immediately available:  
* Pretrial services must provide risk assessment and release recommendations to circuit judge, district judge, or trial commissioner within 24 hours of booking  
* Judge reviews and sets appropriate bond without waiting for scheduled docket  
* Ensures no defendant sits in jail indefinitely without judicial review

---

## **Bond Modification**

**Motion for Bond Reduction (Defense)**

* Attorney files written motion citing statutory factors (RCr 4.02; KRS 431.066)  
* Argues bond is excessive given circumstances  
* May request hearing  
* Most effective when circumstances have changed: new employment, treatment program, family support, corrected information

**Motion to Increase Bond or Revoke (Commonwealth)**

* Filed when defendant commits new offense while on bond  
* Filed when defendant violates bond conditions  
* Filed when new information suggests increased risk  
* Court may revoke bond and order detained until trial

**Bond Revocation Hearing**

* Defendant notified and given opportunity to respond  
* Judge determines whether violation occurred and appropriate remedy  
* Possible outcomes: warning, increased conditions, increased bond amount, revocation and detention

---

## **Key Terms**

* **ROR**: release on recognizance, signature release, no money  
* **Cash bond**: full amount posted before release  
* **Unsecured bond**: promise to pay if fails to appear, no upfront money  
* **Conditional release**: release with specific behavioral requirements attached  
* **Bond forfeiture**: loss of posted money if defendant fails to appear  
* **Bond revocation**: loss of release status, return to custody

## **Connection to Next Phase**

Bond conditions determine the defendant's freedom level during the entire pretrial period`
  },
  {
    id: 'mod4',
    title: 'Legal Representation',
    icon: Briefcase,
    content: `# **LEGAL REPRESENTATION**



Everyone has the constitutional right to counsel, what does the indigency determination looks like, whats the difference between public defenders and retained counsel, and what defendants can and cannot control about their representation.

---

## **Constitutional Right to Counsel**

**Sixth Amendment; Section 11, Kentucky Constitution**

* Right to have assistance of counsel for defense in all criminal prosecutions  
* Applies at all "critical stages": arraignment, preliminary hearing, trial, sentencing, first appeal of right

**KRS 31.110(1)(a)**

* Entitlement to appointed counsel for any charge that carries possible incarceration  
* Misdemeanors: if sentence could include any jail time, right to counsel applies (*Argersinger v. Hamlin*, 407 U.S. 25 (1972))  
* Even a charge with maximum sentence of one day in jail triggers right to appointed counsel if defendant is indigent

**Right Attaches at Arraignment**

* Once defendant appears before judge on charges, right to counsel is active  
* Court cannot proceed with critical stages without ensuring defendant has counsel or has knowingly waived the right  
* Waiver of counsel must be knowing, intelligent, and voluntary — court must warn defendant of dangers of self-representation (*Faretta v. California*, 422 U.S. 806 (1975))

---

## **Indigency Determination**

**Who Qualifies**

* Defendant who cannot afford to retain private counsel without substantial hardship  
* Standard is not absolute poverty — considers income, assets, expenses, and dependents  
* Court makes individualized determination at arraignment

**Process**

* Defendant completes financial disclosure form (income, assets, expenses, debts, dependents)  
* Court reviews disclosure  
* Judge determines eligibility based on:  
  * Gross monthly income  
  * Assets (bank accounts, real property, vehicles)  
  * Monthly expenses and obligations  
  * Number of dependents  
  * Whether hiring attorney would cause substantial financial hardship

**Partial Fee Assessment (KRS Chapter 431)**

* Even when counsel appointed, court may assess partial fees  
* Defendant not fully excused from contributing to defense costs if some ability to pay exists  
* Partial fees typically collected after case concludes, not as prerequisite to appointment  
* Failure to pay may result in civil judgment, not re-incarceration

---

## **Public Defender System**

**Structure**

* Kentucky Department of Public Advocacy (DPA) is statewide public defender system  
* Local offices handle trial-level representation  
* Appellate office handles appeals  
* Capital Trial Unit handles death penalty cases  
* Special units for juvenile, mental health, and other specialized representation

**Daviess County**

* DPA operates regional offices; Daviess County served by regional DPA office  
* Public defenders are licensed attorneys; not paralegals or volunteers

**Caseloads**

* Public defenders carry heavy caseloads — national and state standards recommend limits that are often exceeded in practice  
* This is a systemic reality that affects pace of representation  
* Defendants should expect attorney to be handling many other cases simultaneously  
* Does not mean representation is inadequate, but context for understanding communication frequency

**Client Rights with Public Defender**

* Right to communicate with your attorney  
* Right to be informed of important developments in case  
* Right to participate in decision-making (whether to plead, whether to testify)  
* Right to a competent defense (*Strickland v. Washington*, 466 U.S. 668 (1984))  
* Cannot demand specific public defender or choose which attorney assigned  
* If serious conflict or communication breakdown occurs, may request new counsel from court — but will not be granted simply because defendant prefers different attorney

---

## **Retained (Private) Counsel**

**Right to Choose**

* Defendant who can afford to hire private attorney may do so  
* May retain counsel at any point in proceedings  
* Retained counsel must enter appearance with court  
* If retaining counsel after public defender appointed, public defender relieved of representation

**Timing Considerations**

* Earlier retained = more time to investigate, build relationship, engage in negotiations  
* Replacing counsel late in case can cause delays and continuances  
* Court will not indefinitely delay proceedings to accommodate counsel changes

**Retained vs. Appointed: Practical Differences**

* Access: private attorneys may be more accessible for meetings  
* Caseload: private attorneys may carry fewer cases  
* Resources: some private attorneys have more resources for investigation  
* Accountability: private attorneys answer directly to paying client  
* Competence: both can be excellent or inadequate — bar membership and license required for both

---

## **Right to Represent Yourself (Pro Se)**

**Recognized Right**

* Defendant has constitutional right to represent themselves (*Faretta v. California*)  
* Court must ensure waiver of counsel is knowing and voluntary  
* Court must warn defendant of dangers and disadvantages of self-representation

**Court's Role**

* Judge will strongly discourage self-representation  
* Will ask pointed questions to ensure defendant understands what they are giving up  
* May appoint "standby counsel" to assist without taking over representation

**Reality**

* Self-representation is almost universally a disadvantage  
* Criminal procedure is complex; prosecutors are experienced professionals  
* This course does not advise on self-representation strategy — consult with an attorney

---

## **Key Terms**

* **Indigent**: financially unable to afford an attorney without substantial hardship  
* **Appointed counsel**: attorney assigned by court at public expense  
* **Retained counsel**: attorney hired and paid by defendant  
* **DPA**: Department of Public Advocacy — Kentucky's public defender system  
* **Pro se**: representing oneself without an attorney  
* **Strickland standard**: two-part test for ineffective assistance of counsel — deficient performance + resulting prejudice

## **Connection to Next Phase**

Attorney handles all subsequent proceedings: reviewing discovery, filing motions, conducting negotiations, preparing for trial. The relationship between defendant and attorney is the most important variable in case outcome after the facts themselves. Everything that follows is filtered through this relationship.`
  },
  {
    id: 'mod5',
    title: 'Discovery',
    icon: FileSearch,
    content: `# **DISCOVERY**



The Commonwealth is required to hand over evidence to the defense, what the defense must disclose in return, and what kinds of evidence get produced in a typical Daviess County case.

---

## **Discovery Framework (RCr 7.24)**

**Purpose**

* Ensure defense has access to evidence before trial  
* Prevent "trial by ambush"  
* Allow informed assessment of case strength for plea negotiations  
* Promote fair trials

**Who Produces Discovery**

* Commonwealth Attorney (felonies) or County Attorney (misdemeanors) is responsible  
* They collect from law enforcement agencies and forward to defense  
* Defense submits formal discovery request after arraignment  
* Commonwealth typically has 30-45 days to respond (varies; negotiable)

---

## **What Commonwealth Must Provide**

**Police and Investigative Reports**

* Initial incident/offense reports  
* Supplemental investigation reports  
* Follow-up interview reports  
* Detective reports and notes  
* Arrest reports

**Witness Information**

* Witness statements (written, recorded, or summaries)  
* Names and contact information for all prosecution witnesses  
* Prior statements witnesses gave to law enforcement  
* Grand jury testimony (with limitations)

**Scientific/Laboratory Reports**

* Toxicology reports (blood alcohol, drug screens)  
* DNA analysis results  
* Fingerprint comparison reports  
* Firearms examination reports (ballistics)  
* Drug identification lab results  
* Any other scientific analysis performed

**Electronic Evidence**

* Body camera footage (BWV) from arresting and responding officers  
  * All calls for service where citizen contact made  
  * All traffic stops  
  * All arrests  
  * All searches and seizures  
  * All Miranda warnings and responses  
* Dashcam footage from patrol vehicles  
* Surveillance camera footage obtained by law enforcement  
* Cell phone extractions (Cellebrite data, texts, photos)  
* Social media records obtained through warrant

**Defendant's Own Statements**

* Recorded custodial interviews  
* Written statements signed by defendant  
* Statements made to officers that were documented  
* Statements made to co-defendants if recorded

**Physical Evidence**

* List of all physical evidence collected and preserved  
* Chain of custody documentation  
* Location where evidence is stored

---

## **Brady Material (Exculpatory Evidence)**

**The Rule** (*Brady v. Maryland*, 373 U.S. 83 (1963))

* Commonwealth has constitutional obligation to disclose any evidence favorable to defendant that is material to guilt or punishment  
* Applies even if defense doesn't ask for it  
* Violation of Brady obligation is constitutional error that can result in reversal of conviction

**What Counts as Brady Material**

* Evidence that contradicts Commonwealth's version of events  
* Evidence suggesting another person committed the crime  
* Evidence undermining witness credibility  
* Evidence supporting defendant's innocence claim  
* Favorable forensic results  
* Exculpatory witness statements police obtained but didn't pursue

**Brady Violation Consequences**

* If Brady material suppressed and defendant convicted: conviction may be reversed on appeal  
* Must be material — would have created reasonable probability of different outcome if disclosed  
* Prosecutor's good faith or bad faith is irrelevant — failure to disclose is violation regardless of intent

---

## **Giglio Material (Impeachment Evidence)**

**The Rule** (*Giglio v. United States*, 405 U.S. 150 (1972))

* Extension of Brady — includes evidence that impeaches (attacks credibility of) prosecution witnesses  
* Must be disclosed

**What Counts as Giglio Material**

* Benefits offered to witnesses for their testimony (reduced charges, dropped cases, favorable treatment)  
* Plea agreements with co-defendants who will testify  
* Promises made to informants  
* Prior inconsistent statements by witnesses  
* Prior criminal history of witnesses  
* History of dishonesty or misconduct by law enforcement witnesses  
* Evidence that officer has lied in prior cases

**Police Officer Giglio Files**

* Officers with documented history of dishonesty may be on "Brady/Giglio lists"  
* Defense entitled to know if any officer in the case has such history  
* Can be used for impeachment during cross-examination at trial or suppression hearing

---

## **Defense Disclosure Obligations (Mutual Discovery)**

**Defense Must Provide to Commonwealth:**

* Alibi witnesses: names and addresses of witnesses defendant intends to call to establish alibi; specific location where defendant claims to have been (RCr 7.24)  
* Expert witnesses: identity, qualifications, subject of testimony, reports prepared  
* Notice of intent to raise insanity defense: must provide in advance with supporting documentation  
* Scientific reports prepared by defense experts

**What Defense Does NOT Have to Disclose:**

* Attorney work product (attorney's notes, mental impressions, legal strategy)  
* Defendant's own statements to attorney (attorney-client privilege)  
* Statements of witnesses defendant does not intend to call  
* Anything that would incriminate defendant beyond the charged offense

---

## **Eyewitness Identification Evidence**

*(Derived from law enforcement identification policy)*

**Types of Identification Procedures Used in Daviess County**

* Photo array: witness shown series of photographs (6 photos standard)  
* Show-up: witness brought to location where suspect stopped, asked to identify  
* Lineup: in-person viewing of group of individuals  
* Single-photo verification: only when witness has thorough prior familiarity with suspect  
* Field view: exposure to group of people in public setting

**Procedural Requirements That Defense Can Scrutinize**

* Should be recorded where feasible (video/audio)  
* Multiple witnesses separated; each views independently  
* Administrator should not know which photo is the suspect ("blind administration")  
* Witness told suspect may not be in lineup/array  
* Witness told investigation continues regardless of identification  
* No suggestive conduct that could influence identification

**Defense Strategy**

* Discovery should include all identification procedure documentation  
* Photo arrays or lineup compositions (all photos used)  
* Administrator's identity (were they blind to suspect's identity?)  
* Witness instructions given before procedure  
* Witness confidence statements made immediately after identification  
* Any prior viewings of suspect by witness  
* *Note: identification errors are a leading cause of wrongful convictions*

---

## **Key Terms**

* **Discovery**: formal process of exchanging evidence before trial  
* **Brady material**: evidence favorable to defendant that Commonwealth must disclose  
* **Giglio material**: evidence that impeaches prosecution witnesses  
* **Exculpatory**: tending to clear defendant of fault or guilt  
* **Impeachment**: attacking the credibility of a witness  
* **Chain of custody**: documentation of every person who handled evidence from collection to trial  
* **Mutual disclosure**: defense obligation to disclose certain evidence to Commonwealth

## **Connection to Next Phase**

Discovery review is the foundation of all pretrial strategy. What the attorney finds (or doesn't find) in discovery determines the strength of the case, what motions to file, whether to negotiate a plea and on what terms, and whether to go to trial. Brady and Giglio violations identified post-conviction can be grounds for RCr 11.42 motions.`
  },
  {
    id: 'mod6',
    title: 'Pretrial Proceedings',
    icon: Handshake,
    content: `# **PRETRIAL PROCEEDINGS**



How the pretrial conference process works, why cases get continued repeatedly, how plea negotiations actually function, what diversion programs look like, and what determines whether a case resolves or proceeds to trial.

---

## **Pretrial Conference Framework (RCr 8.26; C6 Local Rule 2.03)**

**Purpose**

* Narrow issues for eventual trial  
* Consider guilty pleas and plea negotiations  
* Address discovery disputes  
* Establish motion deadlines and schedules  
* Discuss witness and exhibit lists  
* Expedite disposition

**Who Participates**

* Defense attorney and Commonwealth Attorney (required)  
* May include judge (in chambers or at bench) or may occur outside court  
* Defendant typically not required to attend unless entering plea  
* Victim may be consulted by Commonwealth but not present at conference

**Frequency**

* Multiple pretrial conferences are standard in complex cases  
* Each conference results in either: plea agreement, continued negotiation with new conference date, or case set for trial  
* Continuances common — see 6B

**Scheduling Order (C6 Local Rule 2.03)**

* Court may issue scheduling order establishing deadlines:  
  * Discovery completion date  
  * Expert witness disclosure deadline  
  * Pretrial motion filing deadline  
  * Pretrial conference attendance deadline  
  * Trial date  
* Either party or court on own initiative may request scheduling order

---

## **Why Cases Get Continued Repeatedly**

**Defense Continuances**

* Need more time to review discovery  
* Investigation ongoing (witnesses to interview, evidence to evaluate)  
* Plea negotiations in progress  
* Motion practice pending  
* Attorney scheduling conflicts  
* Client's decision-making process

**Commonwealth Continuances**

* Witness availability (law enforcement schedules, civilian witnesses)  
* Lab results pending  
* Additional investigation needed  
* Attorney scheduling conflicts

**Court Continuances**

* Docket congestion  
* Judicial unavailability  
* Other cases running over

**Systemic Reality**

* Continuances are routine and expected — not a sign anything is wrong  
* Each continuance requires court approval  
* Pattern of excessive defense continuances can waive speedy trial rights  
* In-custody defendants get priority scheduling because of speedy trial rights pressure

---

## **Plea Negotiations**

**The 95% Reality**

* Approximately 95% of all criminal cases in Kentucky resolve through plea agreements  
* Trials are the constitutional norm but the practical exception  
* Plea negotiation is therefore the central process of the criminal justice system

**What Commonwealth Attorney Considers**

* Strength of evidence (can they prove every element at trial?)  
* Credibility and availability of witnesses  
* Victim's preferences and cooperation  
* Defendant's criminal history (prior record)  
* Aggravating factors (violence, vulnerable victim, use of weapon)  
* Mitigating factors (first offense, addiction, employment, family)  
* Sentencing exposure defendant faces if convicted at trial  
* Available diversion programs  
* Caseload and resource considerations  
* Consistency with how similar cases have been resolved  
* Community impact and public interest

**What Defense Attorney Considers**

* Strength of evidence against client  
* Available defenses (constitutional violations, factual disputes)  
* Results of any motions (suppression wins dramatically change calculus)  
* Defendant's criminal history and exposure  
* Defendant's personal circumstances (family, employment, health)  
* Client's risk tolerance (willing to go to trial?)  
* Likely jury reception of the facts  
* Sentencing judge's tendencies and history  
* What plea agreement is realistically achievable

**Forms of Plea Agreements**

* Charge reduction: felony reduced to misdemeanor, Class A to Class D, etc.  
* Sentence recommendation: Commonwealth agrees to recommend specific sentence  
* Count dismissal: some counts dropped in exchange for plea to others  
* Diversion agreement: entry into program, charges dismissed on completion  
* Conditional plea: preserves right to appeal specific issue (e.g., suppression ruling)

---

## **Diversion Programs**

**Eligibility (General)**

* Typically available for first-time or minimal prior record defendants  
* Non-violent charges  
* Requires Commonwealth recommendation and court approval  
* Defendant must waive speedy trial right during diversion period

**Application Process**

* Attorney moves for diversion consideration  
* Application filed with Commonwealth Attorney's office  
* Commonwealth evaluates and either recommends or declines  
* If recommended, court reviews and sets conditions

**Typical Conditions**

* Regular reporting to pretrial services or probation officer  
* Community service hours  
* Restitution to victims  
* Substance abuse assessment and treatment if indicated  
* Mental health assessment and treatment if indicated  
* No new arrests or charges  
* Employment or enrollment in school  
* No contact with victim  
* Drug testing  
* Specific classes (anger management, victim awareness, etc.)

**Successful Completion**

* Charges dismissed  
* No conviction on record  
* Defendant may deny the arrest occurred for most purposes (not for licensed professions, law enforcement, certain licensing boards)

**Violation of Conditions**

* Prosecution resumes from where it left off  
* Time spent in diversion does not count toward anything  
* Defendant faces original charges

---

## **Key Terms**

* **Pretrial conference**: meeting between attorneys (and sometimes judge) to discuss case status and resolution  
* **Continuance**: postponement of a scheduled hearing or conference  
* **Plea agreement**: negotiated resolution of charges without trial  
* **Diversion**: program allowing charges to be dismissed upon successful completion of conditions  
* **Charge reduction**: agreement to prosecute lesser charge in exchange for guilty plea  
* **Speedy trial**: constitutional right to be tried without unreasonable delay

## **Connection to Next Phase**

Cases that cannot be resolved through negotiation proceed to motion practice and trial preparation. Often, the outcome of pretrial motions — especially suppression hearings — resets the negotiation. A won suppression motion dramatically improves the defendant's bargaining position. A lost suppression motion may push the defendant toward plea.`
  },
  {
    id: 'mod7',
    title: 'Motion Practice',
    icon: FileText,
    content: `# **MOTION PRACTICE**



What are pretrial motions, when they can be filed, what the different types of motions accomplish,

---

## **Daviess County Motion Docket (C6 Local Rule 2.02)**

**Criminal Motion Schedule**

* Criminal motions heard each morning at **8:30 AM on Monday, Wednesday, and Thursday** * Hearings estimated to take more than 30 minutes: set by calling judge's office, generally set at 1:30 PM on first available afternoon  
* Attorneys must be present or have someone duly authorized in their place

**Motion Filing Requirements (C6 Local Rule 2.02(4)(d))**

* Written motions served at least **five (5) days before hearing** unless different time fixed by CR, applicable statute, or court order  
* All motions going to merits or requiring citation of authority must be accompanied by:  
  * Brief but complete statement of grounds for motion  
  * Memorandum of points and authorities (legal argument with citations)  
* Failure to file proper memorandum: grounds to overrule motion

**Response Requirements**

* Party served with motion must file response with:  
  * Statement of grounds for opposing motion  
  * Memorandum of points and authorities  
* Response filed at or before time specified in notice of hearing  
* Failure to file response: grounds to sustain motion  
* Extensions granted for good cause

---

## **Motion to Suppress Evidence (RCr 8.32)**

**Purpose**

* Challenge admissibility of evidence obtained through unconstitutional search, seizure, or arrest  
* Challenge admissibility of defendant's statements obtained in violation of Miranda or constitutional rights  
* If granted: evidence cannot be used at trial

**Grounds for Suppression**

* Unlawful search (no warrant, no exception to warrant requirement, invalid warrant)  
* Unlawful seizure of person (no probable cause for arrest, illegal stop)  
* Miranda violation (statements taken without proper warnings or after invocation)  
* Involuntary confession (coercion, threats, inducements)  
* Improper identification procedures (suggestive lineup, procedural violations)

**Hearing Procedure**

* Evidentiary hearing with live witness testimony  
* Commonwealth typically calls law enforcement witnesses who conducted search/arrest  
* Defense may cross-examine and call own witnesses  
* Defendant may testify (but testifying at suppression hearing does not waive Fifth Amendment for trial)

**Burden of Proof**

* Defendant bears burden to establish *standing* (they had reasonable expectation of privacy in area searched, or were the person seized)  
* Commonwealth then bears burden to prove lawfulness of the search or seizure  
* Standard: preponderance of the evidence (more likely than not lawful)

**Exclusionary Rule**

* Evidence obtained through unconstitutional means suppressed from trial  
* "Fruit of the poisonous tree": evidence discovered as consequence of initial constitutional violation also suppressible  
* Exceptions: inevitable discovery, independent source, attenuated connection, good faith

**Strategic Significance**

* Successful suppression of key evidence (drugs, weapon, statement) may leave Commonwealth unable to prove case  
* Case may be dismissed or dramatically weakened after successful suppression  
* Even partial suppression (e.g., limiting use of statement) changes negotiating leverage

---

## **Motion to Dismiss**

**Grounds**

* **Insufficient indictment**: fails to state a cognizable offense, fails to allege all elements, defective in form or substance  
* **Lack of jurisdiction**: court lacks authority over this type of case or this defendant  
* **Statute of limitations**: prosecution commenced after deadline (misdemeanors: one year from offense; most felonies: no limitation)  
* **Double jeopardy**: defendant previously prosecuted for same offense (Fifth Amendment; Section 13, KY Constitution)  
* **Speedy trial violation**: unreasonable delay in bringing case to trial (*Barker v. Wingo*, 407 U.S. 514 (1972) — four-factor test: length of delay, reason, defendant's assertion of right, prejudice)  
* **Prosecutorial misconduct**: improper conduct that has prejudiced defendant's right to fair trial

---

## **Bill of Particulars (RCr 6.22)**

**Purpose**

* Requests Commonwealth provide more specific factual information about charges  
* When indictment is vague about time, place, manner, or specific acts alleged

**Requirements**

* Must be filed before arraignment, or afterward with court permission  
* May be amended as justice requires  
* Commonwealth must respond with specificity sufficient to allow defendant to prepare defense

---

## **Motion for Change of Venue (RCr 8.30)**

**Grounds**

* Substantial community prejudice that prevents fair and impartial jury  
* Unusual community interest in case  
* Extensive and prejudicial pretrial publicity

**Standard**

* Requires showing that fair jury cannot be selected in Daviess County  
* Courts often try to address through expanded voir dire before granting venue change  
* If granted, case moved to another county in Kentucky

---

## **Motion to Sever (RCr 9.16)**

**Purpose**

* Request separate trials when:  
  * Multiple counts joined in single indictment  
  * Multiple defendants charged in same indictment

**When Available**

* Must be filed before jury is sworn in jury trial  
* Before evidence is received in bench trial

**Grounds**

* Joinder of counts or defendants would prejudice defendant  
* Evidence on one count would improperly influence jury on another  
* Co-defendants have antagonistic defenses  
* Trying all counts together would be unfair

---

## **Competency Evaluation (KRS 504.060; KRS 504.080; KRS 504.100)**

**Standard for Competency**

* Defendant must be competent to stand trial  
* Incompetent = unable to understand nature and consequences of proceedings OR unable to assist counsel in defense

**Motion Process**

* Either party or court may raise competency issue  
* Court orders mental examination (up to 30 days for evaluation)  
* Evaluator (psychiatrist or psychologist) submits written report  
* Court holds hearing on competency

**If Found Incompetent**

* If substantial probability of attaining competency: court commits defendant for treatment (up to 60 days, with extension possible)  
* If no substantial probability: different proceedings (civil commitment, charges dismissed)  
* Periodic review of competency status

---

## **Motion in Limine**

**Purpose**

* Pre-trial order excluding specific evidence from trial  
* Heard immediately before trial  
* Prevents jury from hearing prejudicial evidence

**Common Uses**

* Exclude prior bad acts or criminal history  
* Limit testimony to relevant areas  
* Exclude inflammatory photographs  
* Limit expert testimony to proper scope  
* Exclude hearsay  
* Limit use of defendant's prior statements

---

## **Key Terms**

* **Motion to suppress**: request to exclude unconstitutionally obtained evidence  
* **Standing**: defendant's right to challenge a particular search or seizure (must show they had privacy interest at stake)  
* **Exclusionary rule**: constitutional rule that bars illegally obtained evidence from trial  
* **Fruit of the poisonous tree**: evidence derived from an unconstitutional search/arrest  
* **Bill of particulars**: request for more specific information about charges  
* **Change of venue**: transfer of trial to different county due to local prejudice  
* **Motion in limine**: pre-trial motion to exclude specific evidence from jury's consideration

## **Connection to Next Phase**

Pretrial motion outcomes reset the negotiation. Won suppression = Commonwealth may have no case. Lost suppression = defendant must decide whether the remaining evidence is too strong to risk trial. Denied motions preserve legal issues for appeal. Successfully filed competency motion pauses proceedings entirely.`
  },
  {
    id: 'mod8',
    title: 'The Trial Decision',
    icon: SplitSquareHorizontal,
    content: `# **THE TRIAL DECISION**



what are jury and bench trials, what is an Alford plea, 

---

## **The Statistical Reality**

* Approximately 95% of all Kentucky criminal cases resolve through plea agreement  
* Trial is a constitutional right but a practical rarity  
* Most cases that "go to trial" are resolved by plea in the days or hours before trial begins  
* Trials are expensive, time-consuming, and uncertain for both sides  
* System is built around the expectation that most cases will resolve by plea

---

## **Jury Trial**

**Right**

* Sixth Amendment; Section 11, Kentucky Constitution  
* All serious criminal cases (any charge with potential incarceration over six months)  
* Defendant may waive jury trial and elect bench trial

**Composition**

* 12 jurors in felony cases (6 jurors in misdemeanor district court cases)  
* 1-4 alternates selected depending on case length and complexity

**Verdict Requirement**

* Must be unanimous (all 12 jurors must agree on guilt)  
* Hung jury (cannot reach unanimity) = mistrial; case may be retried  
* Acquittal on any count = double jeopardy bars re-prosecution on that count

**Advantages for Defendant**

* 12 people must all be convinced beyond reasonable doubt  
* One juror with doubt can hang the jury  
* Community conscience brought to bear  
* More formal proceeding with clear structure

**Risks for Defendant**

* Unpredictable; jury may be hostile to defendant or charge  
* Exposure to all evidence in its worst light for Commonwealth  
* Jury instructions may not capture nuances favorable to defense  
* Longer and more stressful process

---

## **Bench Trial**

**When Available**

* Defendant may waive jury trial (must be knowing and voluntary waiver)  
* Commonwealth and court must consent in some jurisdictions

**How It Works**

* Judge serves as finder of fact and law  
* Same burden of proof applies (beyond reasonable doubt)  
* More streamlined proceedings; evidentiary issues resolved without jury present

**When Preferred**

* Technical or complex legal defenses where legal argument matters more than jury appeal  
* Cases where facts are sympathetic to defendant but charge is emotionally charged  
* When defendant's criminal history would be particularly damaging to jury  
* When judge known for careful application of reasonable doubt standard

---

## **The Trial Penalty — How It Works**

**The Concept**

* Defendants who exercise their right to trial and are convicted routinely receive longer sentences than they would have received under a plea agreement for the same conduct  
* This is not random — it is structural and predictable

**Why the Trial Penalty Exists**

* Judges and prosecutors factor in: conservation of judicial resources, witness trauma of testifying, defendant's acceptance of responsibility (or lack thereof)  
* Plea agreements offer reduced charges or reduced sentences as inducement to plead  
* Trial convictions typically result in conviction on the highest charge with no reduction  
* Sentencing after trial often reflects the judge's full assessment of the offense severity

**Real-World Example**

* Commonwealth offers: plead guilty to Class D felony, recommend 2 years probation  
* If defendant goes to trial and is convicted: Class C felony conviction (original charge), judge sentences 8 years imprisonment  
* The difference in outcome between plea and trial conviction is the trial penalty in practice

**Ethical Reality**

* The trial penalty is controversial — many argue it effectively penalizes exercise of a constitutional right  
* Courts have upheld the practice as legitimate incentive for plea rather than impermissible punishment for trial  
* Defense attorneys are ethically required to explain this reality to clients when advising on whether to plead

---

## **Plea Types Available**

**Standard Guilty Plea**

* Defendant admits factual guilt  
* Court accepts plea after Boykin waiver  
* Case moves to sentencing

**Alford Plea** (*North Carolina v. Alford*, 400 U.S. 25 (1970))

* Defendant pleads guilty while maintaining factual innocence  
* Defendant acknowledges strong evidence of guilt and makes rational decision to accept plea  
* Court finds factual basis from record (not defendant's own admission)  
* Legal effect same as guilty plea  
* Useful when: defendant maintains innocence but wants certainty over risk of greater sentence

**Conditional Plea**

* Defendant pleads guilty but reserves right to appeal specific pretrial ruling  
* Most common: conditional plea preserving right to appeal denial of motion to suppress  
* If appeal is won, plea withdrawn and case proceeds  
* Requires consent of Commonwealth and court

**No Contest Plea (Nolo Contendere)**

* Defendant does not contest charges  
* Court treats same as guilty plea for criminal purposes  
* Advantage: conviction cannot be used as admission in subsequent civil lawsuit  
* Not always available in Kentucky courts

---

## **Why Most Defendants Plead**

**Evidence Strength**

* If Commonwealth has strong evidence (video, physical evidence, credible witnesses), odds of acquittal are low  
* Trial risk increases when evidence is overwhelming

**Certainty**

* Plea provides known outcome; trial provides unknown outcome  
* Many defendants prefer certain lesser sentence to uncertain greater sentence risk

**Witness Credibility**

* Victim or witness testimony can be compelling even when defense has counterarguments  
* Jury sympathy for victims can affect verdict

**Cost and Time**

* Trials require months of additional pretrial preparation and waiting  
* Emotional toll on defendant and family  
* For in-custody defendants, trial delay means more time in jail

**Sentencing Exposure**

* Plea may reduce charges from Class B to Class D felony  
* Reduction in sentencing exposure of years is significant

**Commonwealth's Evidence**

* If suppression motions lost and evidence is strong, trial may be quixotic

---

## **Key Terms**

* **Jury trial**: trial where 12 citizens determine guilt or innocence  
* **Bench trial**: trial where judge alone determines guilt or innocence  
* **Trial penalty**: the documented tendency for post-trial sentences to exceed plea agreement sentences for the same conduct  
* **Alford plea**: guilty plea while maintaining factual innocence  
* **Conditional plea**: guilty plea preserving right to appeal a specific ruling  
* **Hung jury**: jury unable to reach unanimous verdict; results in mistrial

## **Connection to Next Phase**

If defendant chooses trial, case moves into trial preparation — witness lists, exhibit preparation, jury selection strategy, opening statement planning. If defendant enters plea, case moves directly toward sentencing and presentence investigation.`
  },
  {
    id: 'mod9',
    title: 'Trial Process',
    icon: Users,
    content: `# **TRIAL PROCESS**



How jury trial periods work in Daviess County, the full trial sequence from jury selection through verdict, what each party can and cannot do, and what happens when a trial ends in acquittal, conviction, or hung jury.

---

## **Assignment to Trial Docket (C6 Local Rule 2.04)**

**Assignment Process**

* Motions to set jury trials heard approximately two months before month with available trial dates  
* Clerk of each division sets motions to be heard in that division  
* Attorney moves clerk for listing on motion docket to request trial date  
* Courts discourage setting trial before: pleadings closed and discovery completed  
* Attorneys must be present at assignment hearing (or duly authorized representative)

**Trial Order**

* Once case on trial docket with dates certain, court enters trial order outlining:  
  * Exchange of witness and exhibit lists  
  * Deadline for disclosure of additional witnesses or exhibits  
  * How objections to new witnesses/exhibits should be raised  
  * Motions in limine hearing schedule (all heard at pretrial conference)

---

## **Jury Trial Periods in Daviess County (C6 Local Rule 2.07)**

**Schedule**

* Jury trial periods held in each division commencing on **first Monday of every other month** (except December)

**Even-Numbered Years:**

* Division I: January, March, May, July, September, November  
* Division II: February, April, June, August, October

**Odd-Numbered Years:** Months reversed between divisions; alternated annually

**December**

* No jury trials in December  
* Grand jury still meets at its designated time in December

**Within Trial Period**

* First two weeks typically devoted to civil cases  
* Criminal cases set thereafter  
* May be modified by judge as circumstances require

**Practical Implication**

* If case misses one trial period, it may wait two months for next available period  
* Combined with continuances, this is why felony cases take 12-36 months to resolve

---

## **Jury Selection (Voir Dire)**

**Jury Pool**

* Selected from master jury list (voter registration + driver's license rolls in Daviess County)  
* Larger panel summoned than needed; excess dismissed after selection  
* Jurors paid modest per diem

**Felony Jury Composition**

* 12 jurors  
* 1-4 alternates (depending on case length)  
* Alternates observe full trial but replaced by regular jurors before deliberation (unless regular juror cannot serve)

**Voir Dire Process**

* Judge introduces case, attorneys, parties  
* Jurors questioned about ability to be fair and impartial  
* Questions may cover: knowledge of case from media, relationships with parties or attorneys, prior jury experience, views on presumption of innocence, ability to follow law as instructed

**Challenges for Cause (Unlimited)**

* Juror has actual bias toward one side  
* Juror has personal relationship with party, attorney, or witness  
* Juror has formed opinion about guilt or innocence  
* Juror cannot follow the law as instructed by judge  
* No limit — as many challenges for cause as can be established

**Peremptory Challenges**

* No reason required; attorney can strike juror for any reason  
* **Felony trials: 8 peremptory challenges per side** * Restriction: cannot be based on race (*Batson v. Kentucky*, 476 U.S. 79 (1986)) or gender (*J.E.B. v. Alabama*, 511 U.S. 127 (1994))  
* *Batson* challenge: if opposing party argues strike is racially motivated, must provide race-neutral explanation

---

## **Trial Sequence (Full)**

### **Phase 1: Opening Statements**

* **Commonwealth first**: outlines what evidence will show; roadmap of case  
* **Defense**: may open immediately after Commonwealth OR defer opening until after Commonwealth rests  
* Defense may waive opening entirely  
* Opening statements are not evidence; attorneys cannot argue during opening

### **Phase 2: Commonwealth's Case-in-Chief**

* Commonwealth calls witnesses and introduces exhibits  
* Direct examination by Commonwealth Attorney  
* Cross-examination by defense attorney (may impeach, challenge credibility)  
* Redirect examination (Commonwealth may rehabilitate witness)  
* Re-cross examination (defense responds to redirect)  
* Court may question witnesses  
* Exhibits authenticated and admitted through witness testimony  
* Physical evidence shown to jury

### **Phase 3: Motion for Directed Verdict (RCr 9.24)**

* After Commonwealth rests, defense moves for directed verdict  
* Argues Commonwealth failed to present evidence establishing each element of charge  
* Standard: evidence viewed in light most favorable to Commonwealth  
* If granted: case dismissed without defense presenting evidence (acquittal)  
* Rarely granted unless Commonwealth genuinely failed to present evidence on element  
* Renewed at end of all evidence (second directed verdict motion)

### **Phase 4: Defense Case**

* Defense has *no obligation* to present any evidence  
* Defendant has *absolute right not to testify* (Fifth Amendment; Section 11, KY Constitution)  
* No adverse inference from defendant's silence — judge instructs jury not to draw negative conclusions  
* If defense presents case: same procedure as Commonwealth (direct, cross, redirect)  
* Defense controls whether to call witnesses; Commonwealth cross-examines each

**If Defendant Testifies:**

* Defendant becomes subject to cross-examination on everything relevant  
* Prior felony convictions may be admitted for impeachment (with limitations)  
* Strategic decision made by defendant after consultation with attorney; attorney cannot unilaterally decide

### **Phase 5: Commonwealth Rebuttal**

* Commonwealth may present rebuttal evidence only  
* Limited to responding to matters raised by defense case  
* Cannot introduce new evidence unrelated to defense presentation

### **Phase 6: Closing Arguments**

* Commonwealth argues first (has burden; gets first word)  
* Defense argues  
* Commonwealth has rebuttal argument (burden gives final word)  
* Arguments are not evidence; attorneys argue reasonable inferences from evidence  
* Attorneys cannot misstate law; judge corrects misstatements  
* Commonwealth cannot comment on defendant's failure to testify

### **Phase 7: Jury Instructions (RCr 9.54)**

* Both parties submit proposed instructions  
* Instructions conference held outside jury's presence  
* Parties must object to erroneous or omitted instructions — failure to object waives issue on appeal  
* Instructions include:  
  * Elements of charged offense (each element must be proved beyond reasonable doubt)  
  * Lesser included offenses (if applicable)  
  * Definition of reasonable doubt  
  * Presumption of innocence  
  * Credibility instruction (how to evaluate witness testimony)  
  * Unanimity requirement  
  * Definition of specific mental states (intentional, knowing, reckless, etc.)  
* Jury takes copy of instructions to deliberations

### **Phase 8: Jury Deliberations**

* Jury retires to deliberation room  
* Only jurors present  
* Jury selects foreperson (or foreperson designated earlier)  
* Deliberations completely secret; no recording  
* Jurors may request:  
  * Review of specific exhibits  
  * Read-back of specific witness testimony  
  * Clarification of instructions (judge responds in writing after consultation with attorneys)  
* Must deliberate to unanimous verdict or declare inability to agree

### **Phase 9: Verdict**

* Verdict must be unanimous (all 12 jurors agree)  
* Returned on verdict form: guilty or not guilty on each count  
* If multiple counts or lesser included offenses: separate verdict on each

**Polling of Jury**

* Either party may request jury be polled  
* Each juror individually asked: "Is this your verdict?"  
* If any juror says "no" — jury returned to deliberations  
* Ensures verdict reflects unanimous judgment

**If Jurors Cannot Agree (Hung Jury)**

* Foreperson announces inability to reach verdict  
* Judge declares mistrial  
* Double jeopardy does NOT bar retrial after hung jury (only bars retrial after acquittal)  
* Commonwealth decides whether to retry case, reduce charges, or dismiss

**Acquittal**

* Not guilty verdict on any count = double jeopardy bars re-prosecution on that count forever  
* Commonwealth cannot appeal acquittal  
* Defendant must be released on that charge

### **Phase 10: Post-Verdict Motions**

**Motion for Judgment Notwithstanding Verdict (RCr 10.24)**

* Must be filed within **5 days after verdict return** * Argues verdict not supported by sufficient evidence  
* Rarely granted

**Motion for New Trial (RCr 10.06)**

* Must be served not later than **5 days after verdict return** * Grounds: newly discovered evidence, prejudicial error at trial, juror misconduct, etc.

---

## **Key Terms**

* **Voir dire**: jury selection process  
* **Challenge for cause**: removal of juror based on demonstrated bias (unlimited)  
* **Peremptory challenge**: removal of juror without stated reason (limited: 8 per side in felony)  
* **Directed verdict**: judge's ruling that evidence is insufficient for case to go to jury  
* **Hung jury**: jury unable to reach unanimous verdict; results in mistrial  
* **Acquittal**: not guilty verdict; bars retrial on that charge  
* **Double jeopardy**: constitutional protection against being tried twice for same offense after acquittal

## **Connection to Next Phase**

Conviction leads to presentence investigation and sentencing hearing. Acquittal ends the prosecution permanently on those counts. Hung jury results in decision whether to retry. Any conviction triggers the 30-day clock for filing notice of appeal.`
  },
  {
    id: 'mod10',
    title: 'Sentencing',
    icon: Clock,
    content: `# **SENTENCING**



What is the presentence investigation process, how Kentucky's felony classification system sets sentencing ranges, what judges consider,

---

## **10A. Presentence Investigation (KRS 532.050)**

**Mandatory for Felonies**

* No court shall impose sentence on felony conviction without first ordering presentence investigation and giving written report consideration  
* Exception: defendant may waive completion of report if in custody and ineligible for probation or parole

**Who Conducts**

* Probation and parole officer assigned by Department of Corrections  
* Takes 30-60 days to complete after conviction

**Report Contents**

* Complete criminal history (local, state, federal, juvenile)  
* Mental health conditions and history of treatment  
* Substance abuse history and treatment history  
* Family background and current family relationships  
* Educational history (level achieved, schools attended)  
* Employment history and current status  
* Military service (may be mitigating factor)  
* Financial status and ability to pay restitution  
* Current living situation  
* Victim impact statement (from victim if available)  
* Defendant's own statement about offense and circumstances  
* Probation officer's assessment and sentencing recommendation

**Psychiatric Examination**

* Court may order presentence psychiatric examination for up to 60 days  
* Separate from competency evaluation  
* Assesses mental health factors relevant to sentencing

**Defendant's Rights Regarding Report (RCr 8.28(1)(4))**

* Defendant has right to review and contest the report  
* Hearing held if defendant contests factual assertions  
* Attorney should review report carefully before sentencing hearing

---

## **10B. Sentencing Hearing**

**Timing**

* Sentence imposed without unreasonable delay  
* Typically 30-60 days after conviction to allow PSI completion  
* Defendant returns to court for sentencing hearing

**Procedure**

1. Presentence report presented to court  
2. Commonwealth Attorney argues for appropriate sentence (may include victim impact statements read aloud)  
3. Defense attorney argues for appropriate sentence (presents mitigating factors, alternative sentencing)  
4. Defendant may make statement (right of allocution — court must give defendant opportunity to speak)  
5. Court may hear from victims directly (victim impact statements)  
6. Judge considers all factors and imposes sentence within statutory range

**Judge's Considerations**

* Statutory sentencing range (cannot go below minimum or above maximum)  
* Nature and circumstances of the offense  
* Defendant's character and background  
* Need for deterrence (specific to this defendant and general to public)  
* Protection of public  
* Rehabilitation potential of defendant  
* Presentence report recommendations  
* Statements from all parties

---

## **10C. Felony Classifications and Sentencing Ranges**

**(KRS 532.020; KRS 532.060)**

| Class | Range | Fine |
| --- | --- | --- |
| Capital Offense | Death or Life without parole | varies |
| Class A Felony | 20-50 years or Life | $1,000-$10,000 |
| Class B Felony | 10-20 years | $1,000-$10,000 |
| Class C Felony | 5-10 years | $1,000-$10,000 |
| Class D Felony | 1-5 years | $1,000-$10,000 |

**Misdemeanor Ranges**

* Class A Misdemeanor: up to 12 months, fine up to $500  
* Class B Misdemeanor: up to 90 days, fine up to $250

---

## **10D. Persistent Felony Offender Enhancement (KRS 532.080)**

**What PFO Is**

* Kentucky's habitual offender statute  
* Dramatically increases sentencing exposure for defendants with prior felony convictions  
* Separate charge added to indictment alongside underlying offense

**PFO 1st Degree**

* Defendant has at least one prior felony conviction  
* Subject to several requirements (age, nature of prior conviction, timing)  
* Effect: mandatory minimum increased substantially (varies by underlying charge)

**PFO 2nd Degree**

* Separate category with different enhancement levels

**Why It Matters**

* A Class D felony (1-5 years) with PFO enhancement can become effectively a much longer sentence  
* PFO charge is often used as plea negotiation leverage by Commonwealth (agree to plead, PFO dismissed)  
* If case goes to trial and defendant convicted of both underlying charge and PFO: maximum exposure applies

---

## **10E. Violent Offender Provisions (KRS 439.3401)**

**85% Rule**

* Defendants convicted of specified violent offenses must serve **85% of their sentence** before becoming eligible for parole consideration  
* Contrasts with non-violent offenders: eligible for parole consideration after serving 20% of sentence  
* List of qualifying offenses specified in statute (murder, manslaughter, robbery, rape, sodomy, various other violent crimes)

**Impact**

* Effectively multiplies real prison time served  
* A 10-year sentence becomes functionally 8.5 years before parole eligibility vs. 2 years for non-violent offense

---

## **10F. Sentencing Options**

**Incarceration**

* Felony over 12 months: Kentucky Department of Corrections (state prison)  
* Felony 12 months or less: county jail (at court's discretion)  
* Misdemeanors: county jail  
* DOC classifies inmates by security level (minimum, medium, maximum, supermax)

**Probation (KRS 533.020)**

* Alternative to incarceration  
* Available for most felonies (some violent offenses excluded by statute)  
* Supervised by probation officer  
* Typical conditions:  
  * Regular reporting to probation officer  
  * Maintain employment or enrollment in school  
  * No new arrests or charges  
  * No contact with victims  
  * Drug and alcohol testing  
  * Submit to warrantless search by probation officer  
  * Community service  
  * Restitution payments  
  * Treatment programs as ordered  
* Violation of conditions: revocation hearing, imposition of original sentence

**Conditional Discharge**

* Court withholds entering judgment of conviction  
* Defendant placed on probationary status with conditions  
* Successful completion: charges dismissed, no conviction on record  
* Violation: conviction entered, sentence imposed  
* More favorable than probation because no conviction record if completed

**Shock Probation (KRS 439.265)**

* Motion filed not earlier than **30 days** nor later than **180 days** after defendant incarcerated  
* Court must rule within 60 days of motion filing  
* Court reconsiders sentence and may place defendant on probation  
* Typically granted to first-time offenders who demonstrate rehabilitation potential  
* Defendant served brief period of incarceration before release on probation

**Concurrent vs. Consecutive Sentences**

* **Concurrent**: multiple sentences run simultaneously; defendant serves longest sentence  
* **Consecutive**: sentences run one after another; defendant serves total combined time  
* Court has discretion unless statute requires consecutive  
* Commonwealth may argue for consecutive; defense argues for concurrent

**Restitution (KRS 532.032; KRS 533.020)**

* Court may (and in many cases must) order defendant to pay restitution to victims  
* Compensates for financial losses resulting from crime  
* Includes: medical expenses, lost wages, property damage, funeral expenses, counseling costs  
* May be condition of probation or standalone order  
* Non-payment may result in revocation if on probation

**Credit for Time Served (KRS 532.120)**

* Defendant receives day-for-day credit for time spent in custody before sentencing  
* Pre-trial detention counts toward sentence  
* Important for in-custody defendants who have served months awaiting trial

---

## **10G. Death Penalty Cases (KRS 532.025)**

**Bifurcated Trial**

* Guilt phase: standard trial determining whether defendant committed capital offense  
* Penalty phase: separate proceeding determining whether death penalty appropriate

**Penalty Phase**

* Only occurs after guilty verdict for capital offense  
* Commonwealth presents aggravating circumstances (KRS 532.025(2)):  
  * Murder of peace officer or firefighter  
  * Murder for hire  
  * Multiple murders  
  * Murder during kidnapping, rape, sodomy, burglary, robbery, arson  
  * Murder of witness to prevent testimony  
  * Especially heinous, atrocious, or cruel manner  
* Defense presents mitigating circumstances (KRS 532.025(3)):  
  * No significant prior criminal history  
  * Extreme emotional disturbance  
  * Victim participation or consent  
  * Duress or domination by another  
  * Diminished capacity  
  * Youth of defendant  
  * Any other mitigating circumstance  
* Jury must find at least one aggravating circumstance and find death appropriate  
* If jury cannot unanimously agree on death: life without possibility of parole  
* Automatic appeal to Kentucky Supreme Court

---

## **Key Terms**

* **Presentence investigation (PSI)**: comprehensive report prepared by probation officer before sentencing  
* **Allocution**: defendant's right to address the court before sentence is imposed  
* **PFO**: Persistent Felony Offender — habitual offender enhancement  
* **85% rule**: requirement that violent offenders serve 85% of sentence before parole eligibility  
* **Probation**: supervised release in community as alternative to incarceration  
* **Conditional discharge**: probationary status with no conviction entered if successfully completed  
* **Shock probation**: motion for early release from incarceration to probation  
* **Restitution**: payment to victim for financial losses caused by crime  
* **Concurrent sentences**: multiple sentences run simultaneously  
* **Consecutive sentences**: multiple sentences run sequentially

## **Connection to Next Phase**

Sentence execution begins immediately after imposition. The 30-day clock for notice of appeal starts running from entry of final judgment. Defense attorney must advise defendant of appeal rights and deadline. If defendant wants to appeal, attorney must file notice of appeal within 30 days — no exceptions.`
  },
  {
    id: 'mod11',
    title: 'Appeals',
    icon: RotateCcw,
    content: `# **APPEALS**


You have a 30-day window to appeal, what can and cannot be appealed, how the appellate process works in Kentucky,

---

## **11A. Direct Appeal — Notice of Appeal**

**RAP 3 — The 30-Day Rule**

* Notice of appeal must be filed within **30 days after entry of final judgment** in criminal cases  
* Final judgment: judgment entered after guilty plea or jury verdict, with sentence imposed and recorded by clerk  
* This deadline is **jurisdictional** — missing it permanently forfeits the right to direct appeal  
* Court of Appeals cannot waive or extend this deadline  
* Defense attorney must calendar this date and act immediately

**Clerk Notification (C6 Local Rule 2.05; RCr 12.06)**

* Clerk immediately notifies parties of entry of judgments in felony cases  
* Notification unnecessary for judgment entered pursuant to guilty plea  
* Notification triggers the 30-day countdown

**Where Filed**

* Notice of appeal filed with circuit court clerk (not the Court of Appeals)  
* Clerk transmits record to Court of Appeals

**Transcript**

* Full transcript of trial proceedings required for appeal  
* Indigent defendants entitled to free transcript  
* Transcript preparation takes time — does not extend the 30-day notice deadline  
* Notice filed first; transcript prepared afterward

---

## **11B. What Can Be Appealed**

**Legal Errors**

* Erroneous jury instructions (properly objected to at trial)  
* Incorrect evidentiary rulings (evidence improperly admitted or excluded)  
* Constitutional violations (improper search admitted, confession obtained illegally)  
* Prosecutorial misconduct that prejudiced the jury  
* Insufficient indictment

**Sufficiency of Evidence**

* Argument that evidence was legally insufficient to support verdict  
* Standard: evidence viewed in light most favorable to Commonwealth  
* High bar to overcome — appellate courts rarely reverse on sufficiency alone

**Sentencing Errors**

* Sentence outside statutory range  
* Court's failure to follow required procedures  
* Improper consideration of factors

---

## **11C. What Cannot Effectively Be Appealed**

**Factual Disputes**

* Appellate courts do not re-weigh evidence  
* Jury's credibility determinations are final  
* "The jury should have believed my witness over theirs" is not an appealable issue

**Errors Not Preserved at Trial**

* If attorney did not object at trial, issue is generally waived for appeal  
* Exception: palpable error review (error so obvious and prejudicial that reversal appropriate even without objection)  
* This is why proper objection practice at trial is critical

**Guilty Plea Cases**

* Defendant who pleads guilty generally waives right to appeal most issues  
* Exceptions: validity of plea itself (was it knowing, intelligent, voluntary?), jurisdiction of court, legality of sentence, issues preserved by conditional plea agreement

---

## **11D. Harmless Error Doctrine**

* Not every error requires reversal  
* Error must have affected defendant's "substantial rights" — likely affected outcome  
* If error was harmless (no reasonable probability it affected verdict), conviction stands despite error  
* Defense must argue error was not harmless; Commonwealth argues it was harmless

---

## **11E. Appellate Process**

1. Notice of appeal filed with circuit court clerk (30 days)  
2. Transcript ordered and prepared  
3. Appellant's brief filed (raises legal arguments for reversal)  
4. Appellee's brief filed (Commonwealth argues for affirmance)  
5. Appellant's reply brief filed (responds to Commonwealth's arguments)  
6. Oral argument (may be scheduled or waived)  
7. Court of Appeals renders written decision

**Kentucky Court of Appeals**

* Intermediate appellate court  
* Panel of three judges reviews case  
* Renders written opinion

**Kentucky Supreme Court**

* Final state appellate authority  
* Review is discretionary (not automatic)  
* Motion for discretionary review filed after Court of Appeals decision  
* Supreme Court accepts cases of significant legal importance or conflicting decisions below

---

## **11F. RCr 11.42 Motion (Collateral Attack)**

**Purpose**

* Post-conviction attack on validity of conviction filed in the original trial court  
* Available for issues that could not or were not raised on direct appeal  
* Primary vehicle for ineffective assistance of counsel claims

**Who May File**

* Must be in custody, on probation, parole, or conditional discharge on the conviction being attacked  
* Not available if sentence was fine only

**Time Deadline**

* Must be filed within **three (3) years** after judgment becomes final  
* Judgment becomes final when: final judgment entered by circuit court clerk, OR when appellate process on direct appeal is complete (whichever is later)  
* Three-year deadline is strict; exceptions limited

**Grounds for Relief**

* **Ineffective assistance of counsel** (*Strickland v. Washington*, 466 U.S. 668 (1984)): Two-part test:  
  1. Deficient performance: attorney's performance fell below objective standard of reasonableness for a practicing criminal defense attorney  
  2. Prejudice: reasonable probability that but for attorney's unprofessional errors, outcome would have been different  
* Constitutional violations (illegal search or seizure, coerced confession, Brady violation)  
* Newly discovered evidence (material, could not have been discovered with due diligence before trial)  
* Actual innocence (high bar; requires powerful exculpatory evidence)  
* Jurisdictional defects (court lacked authority to enter conviction)

**Procedure**

* Motion filed in circuit court where conviction obtained  
* Commonwealth has **20 days** from clerk's mailing of notice to file response  
* Court reviews motion, response, and record  
* If motion raises genuine material factual disputes: evidentiary hearing granted  
* If record conclusively shows defendant not entitled to relief: denied without hearing  
* Either party may appeal adverse ruling to Court of Appeals

**Not a Substitute for Direct Appeal**

* Issues that could have been raised on direct appeal but were not generally cannot be raised in RCr 11.42  
* Exceptions: ineffective assistance claims (by nature arise after trial) and newly discovered evidence

---

## **11G. Federal Habeas Corpus (28 U.S.C. § 2254)**

**Purpose**

* Federal court remedy for state prisoners claiming federal constitutional violations  
* Last resort after all state remedies exhausted

**Exhaustion Requirement**

* Must have pursued and exhausted all available state remedies before filing federal habeas  
* This means: completed direct appeal AND filed and litigated RCr 11.42 motion (if applicable)  
* Federal court will not hear case if state remedies not exhausted

**Time Limitation**

* One year from date state conviction becomes "final" (includes time for seeking certiorari to U.S. Supreme Court after Kentucky Supreme Court denies review)  
* Tolled during time properly filed state post-conviction proceedings are pending

**Grounds for Federal Habeas**

* Limited to violations of the federal Constitution (Fourth, Fifth, Sixth, Eighth, Fourteenth Amendments)  
* Cannot relitigate state law errors  
* Deferential standard: federal court defers to state court's reasonable application of federal law

---

## **Key Terms**

* **RAP 3**: Kentucky appellate rule establishing 30-day deadline for notice of appeal  
* **Jurisdictional deadline**: a deadline that cannot be waived or extended by the court; missing it permanently forfeits the right  
* **Direct appeal**: appeal taken immediately after conviction through standard appellate process  
* **Collateral attack**: post-conviction challenge filed separately from direct appeal process  
* **RCr 11.42**: Kentucky rule governing post-conviction motions in the trial court  
* **Strickland standard**: two-part test for ineffective assistance of counsel (deficient performance + prejudice)  
* **Harmless error**: error at trial that did not affect outcome and therefore does not require reversal  
* **Federal habeas corpus**: federal court review of state conviction for constitutional violations

## **Connection to Next Phase**

Whether appeal is filed or not, the conviction's collateral consequences begin immediately. Employment consequences, housing restrictions, licensing implications, and loss of rights all attach upon conviction — not upon exhaustion of appeals. Collateral consequences begin immediately upon conviction.`
  },
  {
    id: 'mod12',
    title: 'Collateral Consequences',
    icon: AlertTriangle,
    content: `# **COLLATERAL CONSEQUENCES**



The consequences of a felony conviction that extend beyond the sentence imposed by the court — employment, housing, professional licensing, voting, gun rights, immigration, and the narrow circumstances under which expungement is available in Kentucky.

---

## **12A. Firearms (Federal and State)**

**Federal Prohibition (18 U.S.C. § 922(g))**

* Federal law prohibits possession of firearms or ammunition by anyone convicted of a felony (crime punishable by imprisonment for more than one year)  
* Applies regardless of whether defendant actually served any prison time  
* Applies to all firearms and ammunition  
* Violation is separate federal felony

**State Prohibition (KRS 237.110)**

* Kentucky imposes parallel prohibition  
* Convicted felons cannot possess firearms

**Form AOC-033 — Petition for Removal of Firearm Prohibitions**

* Kentucky allows petition to restore firearms rights in limited circumstances  
* KRS 237.108 governs state restoration process  
* Federal prohibition restoration through federal process (separate; more difficult)  
* Form filed in court that imposed original sentence

---

## **12B. Civic Rights**

**Jury Service**

* Felony conviction disqualifies from serving on juries in Kentucky  
* Disqualification is permanent unless conviction expunged or rights restored

**Voting Rights**

* Kentucky: felony conviction results in loss of voting rights  
* Restoration process: executive pardon or specific restoration application  
* Governor has authority to restore civil rights  
* Application process available through Kentucky's online system  

**Public Office**

* Felony conviction bars holding public office in Kentucky  
* Includes elected positions, appointed positions, and various public employment

---

## **12C. Employment Consequences**

**Background Checks**

* Most employers conduct criminal background checks  
* Felony convictions appear indefinitely unless expunged  
* Many employers have blanket policies against hiring felons  
* Fair Credit Reporting Act (FCRA) governs how background check information can be used

**Federal Employment**

* Many federal positions require security clearance  
* Felony conviction is serious disqualifying factor for clearance  
* Certain federal jobs categorically bar those with felony convictions

**State Employment**

* Kentucky merit system positions: felony convictions considered in hiring decisions  
* Some positions categorically exclude convicted felons (law enforcement, positions working with children, etc.)

**"Ban the Box" Considerations**

* Some jurisdictions have passed laws limiting when employers can ask about criminal history  
* Does not eliminate consideration — merely delays inquiry in hiring process  

---

## **12D. Professional Licensing**

**General Rule**

* Most professional licensing boards consider criminal convictions  
* Denial or revocation of license is discretionary in most cases (board weighs nature of offense vs. nature of license)  
* Certain offenses categorically bar certain licenses

**Specific Professions Affected (varies by conviction type)**

* Attorneys: bar admission denied or revoked for crimes of moral turpitude  
* Physicians and nurses: medical and nursing boards may revoke or deny licenses  
* Teachers: felony convictions bar teaching certification in Kentucky  
* Real estate agents: licensing board review required  
* Contractors: various licensing boards consider convictions  
* Security guards and private investigators: convictions may bar licensing  
* Childcare workers: felony convictions categorically bar working in licensed childcare  
* Healthcare workers with access to controlled substances: drug convictions particularly scrutinized

**Padilla Obligation for Licensed Professions**

* Defense attorneys must advise clients of potential licensing consequences before plea  
* *Padilla v. Kentucky* (originally about immigration) principle applied broadly to collateral consequences counsel must disclose

---

## **12E. Housing Consequences**

**Public Housing**

* HUD regulations permit public housing authorities to deny or evict for felony convictions  
* Certain crimes (drug trafficking, sex offenses, other violent crimes) may result in categorical denial  
* Each public housing authority has own policies within HUD guidelines

**Private Housing**

* Private landlords routinely conduct criminal background checks  
* Many deny rental applications for felony convictions  
* No federal law prohibits private landlords from considering felony convictions  
* HUD has issued guidance suggesting blanket bans may create fair housing issues (not binding)

---

## **12F. Federal Benefits**

**Student Loans and Financial Aid**

* Drug convictions while receiving federal financial aid can result in suspension of eligibility  
* Specific chart of offense-to-ineligibility periods established by federal law  
* Completion of drug treatment program can restore eligibility earlier

**SNAP (Food Stamps)**

* Drug felony conviction: Kentucky currently allows SNAP benefits for drug felons (state opted in)  

**Social Security Disability and SSI**

* Benefits suspended during incarceration  
* Resume upon release if otherwise eligible

---

## **12G. Immigration Consequences**

**Critical Warning**

* For non-citizens, criminal conviction can trigger deportation, removal, and permanent bar to re-entry  
* Even misdemeanor convictions (especially drug offenses, domestic violence, theft offenses) can trigger severe immigration consequences  
* Immigration consequences can be worse than the criminal sentence itself

***Padilla v. Kentucky*****, 559 U.S. 356 (2010)**

* U.S. Supreme Court held that criminal defense attorneys must advise non-citizen clients about deportation consequences of guilty pleas  
* Failure to advise is constitutionally ineffective assistance of counsel  
* Defendant can seek to withdraw plea if not properly advised

**Types of Immigration Consequences**

* Deportation/removal from United States  
* Permanent bar to returning to United States  
* Bar to naturalization (citizenship)  
* Inadmissibility (bars re-entry after travel abroad)  
* Specific "aggravated felony" convictions carry automatic deportation consequences

**Who Needs to Know**

* Any person who is not a U.S. citizen, regardless of immigration status  
* Includes lawful permanent residents ("green card" holders)  
* Immigration attorney consultation strongly recommended for any non-citizen facing criminal charges

---

## **12H. Expungement (KRS 431.073 — Felonies; KRS 431.078 — Misdemeanors)**

**What Expungement Does**

* Records sealed from public access  
* Defendant legally may deny conviction occurred in most contexts  
* Exceptions: law enforcement access, certain licensing boards, use for future sentencing enhancements  
* Does NOT restore firearms rights without separate petition  
* Record still considered if defendant is charged with new offense (for sentencing enhancement)

**Felony Expungement Eligibility (KRS 431.073)**

* **Class D felonies only** — higher felony classes not eligible  
* **Five-year waiting period** after completion of sentence (including probation, parole, or conditional discharge)  
* No subsequent felony convictions during waiting period  
* No subsequent misdemeanor convictions during waiting period  
* No pending charges at time of petition  
* **One expungement per lifetime** — cannot expunge more than one felony ever

**Ineligible Felony Offenses**

* Violent offenses  
* Sex offenses  
* DUI-related offenses  
* Most drug trafficking offenses (some exceptions)  
* Crimes against children  
* Offenses requiring sex offender registration

**Misdemeanor Expungement (KRS 431.078)**

* Five-year waiting period after completion of sentence  
* No subsequent convictions during waiting period  
* Class A and B misdemeanors eligible (with exceptions)  
* Many misdemeanors involving violence or sex offenses ineligible

**Application Process**

* Petition filed in court that imposed sentence  
* Fee required (unless waived for indigency)  
* Commonwealth has opportunity to object  
* Court holds hearing if objection filed  
* Judge grants or denies based on statutory criteria

---

## **Key Terms**

* **Collateral consequences**: legal and practical consequences of conviction beyond the sentence imposed by court  
* **Expungement**: sealing of criminal records from public access  
* **Padilla obligation**: defense attorney's constitutional duty to advise non-citizen clients of deportation consequences  
* **Aggravated felony**: immigration law term for specific offense categories that trigger automatic deportation  
* **Restoration of rights**: process by which rights lost upon felony conviction may be returned

## **Connection to Next Phase**

Collateral consequences persist indefinitely. For eligible convictions, the expungement process begins after the five-year waiting period from sentence completion. Understanding these consequences is essential before making any plea decisions — they often outlast the sentence by decades.`
  },
  {
    id: 'mod13',
    title: 'System Overview',
    icon: Network,
    content: `# **HOW THE PIECES CONNECT**



The full timeline from arrest to resolution, who each participant is and what role they play, why cases take as long as they do, what decision points exist and how each shapes the path forward, and what realistic expectations look like for a Daviess County criminal case.

---

## **13A. Case Timeline Visualization**

ARREST  
  ↓  
BOOKING + PRETRIAL SERVICES INTERVIEW (within 12 hours)  
  ↓  
INITIAL APPEARANCE/ARRAIGNMENT (without unnecessary delay)  
  → Bail set | Attorney appointed/retained | Plea entered  
  ↓  
DISTRICT COURT (if misdemeanor or pre-indictment felony)  
  → Misdemeanor: pretrial conference → plea or trial → sentencing  
  → Felony: preliminary hearing → transfer to circuit court  
  ↓  
GRAND JURY (felonies only; first Tuesday of January and July, monthly thereafter)  
  → Indictment returned ("True Bill") OR No True Bill (dismissed)  
  ↓  
CIRCUIT COURT ARRAIGNMENT (8:30 AM, first Thursday/Friday after trial period begins)  
  → Not guilty plea → pretrial process begins  
  → Guilty plea → sentencing  
  ↓  
DISCOVERY (30-45 days to receive; review ongoing)  
  ↓  
PRETRIAL CONFERENCES (repeated; Monday/Wednesday/Thursday 8:30 AM motion docket)  
  → Plea negotiations ongoing  
  → Motions filed and argued  
  ↓  
MOTION PRACTICE (if applicable)  
  → Suppression hearing → won (case weakened/dismissed) or lost (preserved for appeal)  
  → Other motions resolved  
  ↓  
TRIAL DECISION  
  → 95%: Plea agreement → Sentencing  
  → 5%: Trial  
  ↓  
TRIAL (jury trial periods: first Monday of alternating months; never December)  
  → Acquittal → case over (double jeopardy protection)  
  → Conviction → sentencing  
  → Hung jury → possible retrial  
  ↓  
PRESENTENCE INVESTIGATION (30-60 days)  
  ↓  
SENTENCING HEARING  
  ↓  
POST-CONVICTION  
  → 30 days: Notice of appeal (RAP 3) — jurisdictional, cannot be extended  
  → Up to 3 years: RCr 11.42 motion (ineffective assistance, etc.)  
  → Federal habeas corpus (after state remedies exhausted; 1-year deadline)  
  ↓  
EXECUTION OF JUDGMENT  
  → Incarceration / Probation / Conditional discharge  
  → Parole eligibility (20% for non-violent; 85% for violent offenders)  
  ↓  
COLLATERAL CONSEQUENCES (persist indefinitely)  
  → 5 years after sentence completion: expungement eligible (Class D only)  

---

## **13B. Roles of Each Participant**

**Judge**

* Neutral arbiter; neither advocate for prosecution or defense  
* Decides all legal questions (admissibility, jury instructions, motions)  
* Sentences defendant within statutory range  
* Ensures proceedings are fair and constitutional  
* In Daviess County: two circuit judges, one per division (Division I and Division II)

**Commonwealth Attorney (Circuit Court — Felonies)**

* Elected county official (Daviess County Commonwealth Attorney)  
* Represents Commonwealth (not victims — though victim interests considered)  
* Controls charging decisions: what charges to file, what to offer in plea  
* Prosecutes all felony cases in circuit court  
* Cannot be directed by judge or victim on how to proceed

**County Attorney (District Court — Misdemeanors)**

* Elected county official (Daviess County Attorney)  
* Prosecutes all misdemeanors in district court  
* Also handles civil county business (separate from criminal)

**Defense Attorney**

* Sole advocate for defendant  
* Ethically obligated to provide zealous representation within bounds of law  
* Advises on all decisions; client makes ultimate decisions on whether to plead, whether to testify  
* Cannot reveal client confidences (attorney-client privilege)  
* Public defender: appointed by court, paid by Commonwealth; private: retained by defendant

**Pretrial Services Officer**

* Court employee (not law enforcement)  
* Conducts risk assessment interview at booking  
* Prepares recommendation for initial appearance  
* Monitors defendants released on conditional release  
* Reports violations to court

**Probation and Parole Officer**

* Department of Corrections employee  
* Conducts presentence investigation  
* Supervises defendants on probation after sentencing  
* Monitors compliance with conditions  
* Reports violations to court (can trigger revocation)

**Court Clerk**

* Administrative officer of the court  
* Maintains all case files and records  
* Issues summonses, serves notices, transmits documents  
* Notifies parties of judgment entries (critical for appeal deadline)  
* Collects fines and fees

**Victim**

* Has rights under Kentucky constitutional amendment and statute (Crime Victim Bill of Rights)  
* Right to be notified of hearings  
* Right to be present at certain proceedings  
* Right to submit victim impact statement at sentencing  
* Right to be heard on plea agreement  
* Does NOT control prosecution decisions — Commonwealth Attorney makes those calls

---

## **13C. Why Cases Take So Long**

**Calendar Structure**

* Jury trial periods occur only every other month in each division  
* December has no jury trials  
* Case not resolved by plea must wait for available trial slot  
* Complex cases may need to wait multiple periods

**Discovery Volume**

* Large cases may involve thousands of pages of discovery, multiple videos, scientific reports  
* Adequate review takes time; rushing creates ineffective assistance risk

**Motion Practice**

* Suppression hearings require scheduling, preparation, hearing time, and court ruling  
* Contested motions can add months

**Continuances**

* Both sides get continuances for legitimate reasons  
* Cumulative effect can extend case to 18-24 months for routine felonies  
* Complex cases (multiple defendants, large drug conspiracies, violent crimes): 36+ months not unusual

**Court Congestion**

* Daviess County courts handle heavy civil and criminal dockets simultaneously  
* Available hearing slots are finite

**Negotiation Process**

* Plea negotiations don't happen in one meeting; require multiple rounds  
* Commonwealth may need to consult with victim, supervisor, or obtain additional information  
* Defense may need to conduct investigation before advising client on offer

---

## **13D. Typical Daviess County Timelines**

| Case Type | Arrest to Disposition |
| --- | --- |
| Misdemeanor plea | 2-6 months |
| Misdemeanor trial | 4-12 months |
| Felony plea | 6-18 months |
| Felony trial | 12-36 months |
| Complex felony trial | 24-48+ months |

*These are typical ranges, not guarantees. Custody status, case complexity, and motion practice all affect timing.*

---

## **13E. Decision Points and Procedural Branches**

**At Arraignment:**

* Plead guilty immediately → sentencing  
* Plead not guilty → entire pretrial process

**After Discovery Review:**

* Evidence clearly strong → plea negotiations intensify  
* Evidence has problems → motions filed, negotiations from stronger position

**After Suppression Hearing:**

* Won suppression → Commonwealth may dismiss or dramatically reduce offer  
* Lost suppression → may still appeal denial via conditional plea; otherwise face trial with evidence intact

**At Plea Decision Point:**

* Accept offer → certainty of negotiated outcome; waive most appeal rights  
* Reject offer → trial with risk of greater sentence if convicted

**At Trial:**

* Acquittal → case over permanently  
* Conviction → sentencing + appellate options  
* Hung jury → possible retrial from beginning

**At Sentencing:**

* Probation/conditional discharge → no supervision begins  
* Incarceration → prison/jail; parole eligibility timeline begins; appeal clock running

---

## **13F. Constitutional Protections Throughout**

Every phase of the process is governed by constitutional protections. These are not technicalities — they are the framework that separates a system with due process from one without:

* **Fourth Amendment**: governs every search and seizure from arrest through trial  
* **Fifth Amendment**: self-incrimination (right to silence at every stage), double jeopardy (bars retrial after acquittal), due process  
* **Sixth Amendment**: right to counsel (at all critical stages), speedy trial, confrontation of witnesses, compulsory process (defendant can compel witnesses to testify), jury trial  
* **Eighth Amendment**: protection against excessive bail, protection against cruel and unusual punishment  
* **Fourteenth Amendment**: due process, equal protection (right to equal treatment regardless of race, gender, etc.)  
* **Kentucky Constitution, Sections 7, 10, 11, 13, 16, 17**: parallel and sometimes stronger state protections

---

## **13G. Practical Realities**

**Resource Constraints Affect Outcomes**

* Public defenders carry heavy caseloads — system functions because most cases plead  
* Jail capacity affects who stays in and who bonds out  
* Lab turnaround times affect how quickly cases can proceed  
* Court calendar congestion determines realistic trial dates

**The Plea System Is the Real System**

* Judges, prosecutors, and defense attorneys all operate with plea resolution as the expected outcome  
* Trial is constitutionally protected but practically exceptional  
* Understanding what drives plea negotiations is more practically valuable than understanding trial procedure for most defendants

**Local Legal Culture Matters**

* Relationship between Commonwealth Attorney's office and defense bar  
* Daviess County judicial tendencies and sentencing patterns  
* Community standards on particular offense types  
* These factors are real and affect outcomes — they cannot be fully described in a general overview

---

## **Key Terms**

* **Arraignment**: first court appearance on formal charges  
* **Grand jury**: body of citizens that decides whether to indict on felony charges  
* **Indictment**: formal felony charge returned by grand jury  
* **Trial period**: scheduled window in Daviess County court calendar when jury trials occur  
* **Motion docket**: scheduled hearing times for pretrial motions  
* **Double jeopardy**: constitutional bar on retrial after acquittal`
  },
  {
    id: 'appendices',
    title: 'Appendices',
    icon: Paperclip,
    content: `# **APPENDICES**


Key citations include:

* RCr 2.02, 2.04, 2.06, 2.08, 2.10, 2.12, 2.14  
* RCr 3.02, 3.05, 3.07, 3.10, 3.14, 3.16, 3.18, 3.20, 3.22  
* RCr 4.00, 4.02  
* RCr 5.01, 5.02, 5.14, 5.18  
* RCr 6.10, 6.22  
* RCr 7.24  
* RCr 8.02, 8.26, 8.28, 8.30, 8.32  
* RCr 9.16, 9.24, 9.54  
* RCr 10.06, 10.24  
* RCr 11.22, 11.42  
* RCr 12.06  
* RAP 3  
* C6 Local Rules 1.04, 1.07, 2.01, 2.02, 2.03, 2.04, 2.05, 2.06, 2.07  
* KRS 31.110; 431.005; 431.064; 431.066; 431.073; 431.078  
* KRS 500.050; 500.070  
* KRS 504.060; 504.080; 504.100; 504.120  
* KRS 532.020; 532.025; 532.032; 532.050; 532.060; 532.080; 532.100; 532.120  
* KRS 533.020  
* KRS 439.265; 439.340; 439.3401  
* KRS 237.108; 237.110  
* 18 U.S.C. § 922(g)  
* 28 U.S.C. § 2254  
* Supreme Court Order 2025-22

## **Appendix E: Case Law Foundations**

| Case | Holding | Source |
| --- | --- | --- |
| *Boykin v. Alabama*, 395 U.S. 238 (1969) | Guilty plea requires knowing, intelligent, voluntary waiver of rights | 2, 8 |
| *Argersinger v. Hamlin*, 407 U.S. 25 (1972) | Right to appointed counsel for any charge carrying possible incarceration | 2, 4 |
| *Brady v. Maryland*, 373 U.S. 83 (1963) | Commonwealth must disclose exculpatory evidence | 5 |
| *Giglio v. United States*, 405 U.S. 150 (1972) | Commonwealth must disclose evidence impeaching own witnesses | 5 |
| *Batson v. Kentucky*, 476 U.S. 79 (1986) | Race cannot be basis for peremptory jury challenges | 9 |
| *North Carolina v. Alford*, 400 U.S. 25 (1970) | Defendant may plead guilty while maintaining factual innocence | 8 |
| *Faretta v. California*, 422 U.S. 806 (1975) | Defendant has right to self-representation | 4 |
| *Strickland v. Washington*, 466 U.S. 668 (1984) | Standard for ineffective assistance of counsel (deficient performance + prejudice) | 4, 11 |
| *Barker v. Wingo*, 407 U.S. 514 (1972) | Four-factor test for speedy trial violations | 7 |
| *Padilla v. Kentucky*, 559 U.S. 356 (2010) | Defense counsel must advise non-citizens of deportation consequences | 12 |
| *J.E.B. v. Alabama*, 511 U.S. 127 (1994) | Gender cannot be basis for peremptory jury challenges | 9 |
| *Commonwealth v. Ingram*, 46 S.W.3d 569 (Ky. 2001) | Video arraignment permitted as functional equivalent of in-person | 2 |
| *Terry v. Ohio*, 392 U.S. 1 (1968) | Investigatory stops require reasonable suspicion | 1 |`
  },
  {
    id: 'resources',
    title: 'Resource Library',
    icon: Library,
    content: `# **Reference Document Library**

This section provides access to the supplementary manuals, rules, and casebooks referenced in the Daviess County legal navigation resources.

## **1. Local Court Rules & Analysis**
* **Circuit Court Rules (C6):** \`C6LOCALRULES (1).pdf\`
* **District Court Rules (D6):** \`D6LOCALRULES (1).pdf\`
* **Family Court Rules:** \`C6FamilyRules.pdf\`
* **Court Rules Analysis:** \`court_rules_analysis.md\`

## **2. Police Practices, Search & Seizure**
* **Model Patrol Legal Handbook (2025):** \`2025-Model-Patrol-Legal-handbook-250917.pdf\`
* **Search and Seizure Casebook:** \`Search-and-Seizure-Casebook_250520.pdf\`
* **Police Interrogation Tactics & Coercion (KY):** \`Kentucky Police Interrogation Tactics and Coercion_ Case Law Analysis and Misconduct Patterns.pdf\`
* **Search in a School Environment (2019):** \`Search-in-a-School-Environment-2019.pdf\`
* **Miranda Warning Card:** \`Miranda-Card_PRINTOUT.pdf\`
* **Citizen Interdiction Counter:** \`citizen_interdiction_counter.html\`

## **3. Evidence & Trial Practice**
* **Kentucky Rules of Evidence (2019):** \`Kentucky-Rules-of-Evidence-2019.pdf\`
* **Evidence Manual (8th Edition):** \`Evidence-Manual-8th-Edition-FINAL.pdf\`
* **Suppression Manual (May 2024):** \`Suppression-Manual-May-2024.pdf\`
* **Trial Law Notebook:** \`trial law notebook.pdf\`
* **Conflicts of Interest:** \`conflicts_of_interest.pdf\`

## **4. Appeals & Post-Conviction**
* **Basic Appellate Practice Handbook (P56):** \`P56BasicAppellatePracticeHandbook.pdf\`
* **Criminal Appeals Brochure:** \`Criminal-Appeals-brochure.pdf\`

## **5. Specialized Manuals & Victim Resources**
* **Domestic & Interpersonal Violence Prosecution Manual (2024):** \`2024 Domestic Violence and Interpersonal Violence Prosecution Policy Procedure Manual.pdf\`
* **LGBTQ Victims of Crime:** \`LGBTQ-Victims-of-Crime.pdf\`
* **Fighting For Your Rights From Court:** \`fighting for your rights from court.pdf\`
* **LEOSA for KY Law Enforcement (2019):** \`LEOSA-for-Kentucky-Law-Enforcement-2019.pdf\`
* **Matricula Consular (2019):** \`Matricula-Consular-2019.pdf\`
* **First Amendment:** \`first-amendment-module.html\`
* **KCLM (2025):** \`2025-KCLM_250815.pdf\`
* **Kentufkt:** \`kentufkt.pdf\`
`
  }
];
