import java.util.Scanner;
class Employee {
    private String name;
    private double bsalary;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name=name;
    }
    public double getBasicSalary() {
        return bsalary;
    }
    public void setBasicSalary(double bsalary) {
        if (bsalary>0) {
            this.bsalary = bsalary;
        } else {
            System.out.println("salaryless then zero");
        }
    }
    public double calculateSalary() {
        return bsalary;
    }
}
class PermanentEmployee extends Employee {
    @Override
    public double calculateSalary() {
        double bonus=getBasicSalary()*(20/100);
        return getBasicSalary()+bonus;
    }
}

class ContractEmployee extends Employee {
    @Override
    public double calculateSalary() {
        double bonus = getBasicSalary()*(10/100);
        return getBasicSalary()+bonus;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String type = sc.nextLine().trim();
        String name = sc.nextLine().trim();
        double basicSalary = Double.parseDouble(sc.nextLine().trim());

        Employee emp;

        if (type.equalsIgnoreCase("P")) {
            emp = new PermanentEmployee();
        } else if (type.equalsIgnoreCase("C")) {
            emp = new ContractEmployee();
        } else {
            System.out.println("invalid type");
            sc.close();
            return;
        }
        emp.setName(name);
        emp.setBasicSalary(basicSalary);
        System.out.println("employee:"+emp.getName());
        System.out.printf("finalsalary:%.2f%n",emp.calculateSalary());
        sc.close();
    }
}