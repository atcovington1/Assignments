package ssa.weekTwoAssignment;

public class MainLine {
	
	public static void main(String[] args) {
		
		BankAccount savingss = new BankAccount(); 
		
		savingss.accountId = 200;
		savingss.description = "My personal savings account";
		savingss.balance = 1000.00;
		
		System.out.println("Account ID is " + savingss.accountId + ".  "+ "This account is " + savingss.description + ".");
		System.out.printf("The initial balance is $" + savingss.balance) ;
		
		System.out.println("Withdraw $750.00");
		System.out.println("New Balance  " + savingss.withdraw (750.00));
		System.out.println("Withdraw $250.00");
		System.out.println("New Balance  " + savingss.withdraw (250.00));
		System.out.println("Deposit $200");
		System.out.println("New Balance " + savingss.deposit(200.00));
		
		
	
	//	System.out.println("Report "+savingss.print());
		
		
		BankAccount checking = new BankAccount();
		
		checking.accountId = 100;
		checking.description = "My personal checking Account";
		checking.balance = 500.00;
		
		System.out.println("Account ID is " + checking.accountId + ".  "+ "This account is " + checking.description + ".");
		System.out.printf("The initial balance is $" + checking.balance) ;
		
		System.out.println("Deposit $200.00");
		System.out.println("New Balance" + checking.deposit(200));
		System.out.println("Withdrawal $600.00");
		System.out.println(" New Balance " + checking.withdraw(600));
		System.out.println("Deposit $1000.00");
		System.out.println("New Balance" + checking.deposit(1000));
		System.out.println("Withdrawal $300.00");
		System.out.println("New Balance" + checking.withdraw(300));
		System.out.println("Withdrawal $200.00");
		System.out.printf("New Balance:  %.2f " , checking.withdraw(200));
		System.out.printf("Report: " , checking.print());
		
	;
	}

}
