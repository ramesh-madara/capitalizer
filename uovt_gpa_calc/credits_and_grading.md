# UOVT GPA Calculation: Credit and Grade Allocation

[Live Calculator](https://ramesh-madara.github.io/capitalizer/uovt_gpa_calc/sem2/)

This document outlines how grade points are allocated for each letter grade and the credit values assigned to each subject across Semester 1 and Semester 2 for the University of Vocational Technology (UOVT).

## Grade Point Mapping

The grade points for each letter grade are determined by the raw marks range. The mapping is as follows:

| Grade | Marks Range | Grade Point |
|-------|-------------|-------------|
| A+    | 85+         | 4.0         |
| A     | 75–84       | 4.0         |
| A-    | 70–74       | 3.7         |
| B+    | 65–69       | 3.3         |
| B     | 60–64       | 3.0         |
| B-    | 55–59       | 2.7         |
| C+    | 50–54       | 2.3         |
| C     | 45–49       | 2.0         |
| C-    | 40–44       | 1.7         |
| D+    | 35–39       | 1.3         |
| D     | 30–34       | 1.0         |
| F     | <30         | 0.0         |

## Subject Credit Allocation

Each subject carries a specific number of credits, which serves as a weight in the GPA calculation. Some subjects are non-GPA computing (like Communication Skills in English) and do not affect the final Semester GPA or Final GPA (FGPA).

### Semester 1

| Subject Name                      | Credits | Counts for GPA |
|-----------------------------------|---------|----------------|
| Mathematics for ICT I             | 3       | Yes            |
| Computer Programming              | 4       | Yes            |
| Software Development Practices    | 4       | Yes            |
| Digital Electronics               | 3       | Yes            |
| Data Communication and Networks   | 3       | Yes            |
| Database Design                   | 3       | Yes            |
| Internet Technologies             | 4       | Yes            |
| Communication Skills in English I | 3       | No             |

**Total Semester 1 GPA Computing Credits:** 24

### Semester 2

| Subject Name                       | Credits | Counts for GPA |
|------------------------------------|---------|----------------|
| Operating Systems                  | 2       | Yes            |
| Mathematics for ICT II             | 3       | Yes            |
| Computer Architecture              | 3       | Yes            |
| Data Structures and Algorithms     | 4       | Yes            |
| Database Systems and Programming   | 6       | Yes            |
| Visual Programming I               | 4       | Yes            |
| Web Programming                    | 6       | Yes            |
| Computer Networks                  | 3       | Yes            |
| Communication Skills in English II | 3       | No             |

**Total Semester 2 GPA Computing Credits:** 31

## GPA Calculation Formula

The Grade Point Average (GPA) is computed using the weighted average formula:

```text
GPA = (Σ (Subject Credits × Grade Point)) / (Σ GPA Computing Credits)
```

**Steps to calculate:**
1. For each GPA-computing subject, multiply its `Credits` by the `Grade Point` obtained to get "Total Points" for that subject.
2. Sum the "Total Points" for all GPA-computing subjects.
3. Sum the `Credits` for all GPA-computing subjects.
4. Divide the total points sum by the total credits sum to get the GPA.

Non-GPA computing subjects like *Communication Skills in English* are entirely excluded from both the total points and total credits sum.
