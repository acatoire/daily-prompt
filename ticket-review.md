# Ticket Review

## The prompt
```markdown
You are an AI assistant specialized in software development and security review.
Your task is to review the provided ticket for:

- Explaining any CVE (Common Vulnerabilities and Exposures) providing a resume of the issue.
- Identifying and describing the associated risks.
- Searching for the usage of the affected component or pattern in the codebase to assess and adapt to the risk.
- Suggesting mitigation or remediation steps if necessary.
- Provide definition of ready to ensure the issue can be started.
- Provide a list of acceptance criteria to ensure the issue is resolved.
- Provide a definition of done to ensure the issue is fully completed.

Return a summary of findings and actionable recommendations.
```

## Example
```markdown
You are an AI assistant specialized in software development and security review.
Your task is to review the provided ticket for CVE references, risk identification, and codebase usage.

Here is the ticket:
---
Title: Update library X due to CVE-2023-12345

Description:
The project uses library X version 1.2.3, which is affected by CVE-2023-12345. This vulnerability allows remote attackers to execute arbitrary code via a crafted payload.

---

Please:
- Explaining any CVE (Common Vulnerabilities and Exposures) providing a resume of the issue.
- Identifying and describing the associated risks.
- Searching for the usage of the affected component or pattern in the codebase to assess and adapt to the risk.
- Suggesting mitigation or remediation steps if necessary.
- Provide definition of ready to ensure the issue can be started.
- Provide a list of acceptance criteria to ensure the issue is resolved.
- Provide a definition of done to ensure the issue is fully completed.
```

Result:
```markdown
Here is a structured review of the provided ticket concerning **CVE-2023-12345**:

---

### **1. CVE Explanation and Summary**

**CVE-2023-12345** (hypothetical for this example) describes a **remote code execution (RCE)** vulnerability in **library X version 1.2.3**, which allows an attacker to execute arbitrary code by sending a **crafted payload**. This typically results from:

* Insecure deserialization.
* Unvalidated input being interpreted by an unsafe parser.
* Unsafe reflection or scripting interfaces.

**Severity:** High (likely CVSS 8.0+ if RCE with network access)
**Exploitability:** High — requires only network access and specially crafted data.
**Impact:** Full compromise of system integrity and potential data breach.

---

### **2. Associated Risks**

* **Remote Code Execution**: Attacker can run arbitrary code on the host, leading to potential full control of the system.
* **Lateral Movement**: Once compromised, attacker can pivot to other internal services or databases.
* **Data Exfiltration or Destruction**: Attacker can access or delete sensitive data.
* **Service Disruption**: May result in Denial of Service (DoS) or persistent malware.

---

### **3. Codebase Usage Assessment**

#### What to search in the codebase:

1. **Direct dependencies**:

    * `pom.xml`, `build.gradle`, `package.json`, etc. for:

      ```xml
      <dependency>
        <groupId>com.example</groupId>
        <artifactId>library-x</artifactId>
        <version>1.2.3</version>
      </dependency>
      ```

2. **Transitive dependencies**:

    * Use `mvn dependency:tree`, `gradle dependencies`, or `npm ls` to find transitive inclusion of library X.

3. **Dangerous usage patterns**:

    * Look for:

      ```java
      new XDeserializer().deserialize(userInput);
      scriptEngine.eval(userInput);
      ```
    * Untrusted data passed to parsing APIs from the vulnerable library.

4. **Definition of Ready**

    To begin this ticket, the following must be clear and confirmed:
    
    * [ ] Identify exact **fixed version** of library X to upgrade to.
    * [ ] Determine **locations of usage** (direct/transitive) in the codebase.
    * [ ] Assess whether any **test coverage** exists for library usage.
    * [ ] Check if other systems/packages are indirectly affected by the change (e.g., via shared modules).

5. **Acceptance Criteria**

    * [ ] Library X is upgraded to a **non-vulnerable version**.
    * [ ] All occurrences of the vulnerable version in dependency files are removed.
    * [ ] All deserialization or dynamic input-handling usage of the library is **audited**.
    * [ ] No runtime errors or test regressions after upgrade.
    * [ ] A **test case or sandbox test** exists to confirm that malicious payloads no longer lead to RCE.
    * [ ] Risk assessment is documented in the ticket or changelog.

6. **Definition of Done**

    * [ ] Patch version of library X is merged and deployed.
    * [ ] All CI/CD tests pass.
    * [ ] Security test or validation script verifies the vulnerability is no longer exploitable.
    * [ ] Documentation/changelog updated to reflect the change and mitigation of CVE-2023-12345.
    * [ ] Ticket includes references to the CVE, fixed version, and any upstream advisory.
    * [ ] Sign-off from Security and QA teams.

```
