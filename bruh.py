# %% 
import numpy as np 
import matplotlib.pyplot as plt 

STANDARD = 2 * np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
plt.plot(STANDARD, np.array([0.0028, 0.003, 0.004, 0.05, 0.08, 0.21, 0.39, 0.69, 0.87, 0.98]), label=r"$\beta=0.05$")
plt.plot(STANDARD, np.array([0.0197, 0.020, 0.023, 0.03, 0.09, 0.19, 0.40, 0.74, 0.74, 0.90]), label=r"$\beta=0.15$")
plt.plot(STANDARD, np.array([0.086449, 0.086451, 0.09, 0.101, 0.196, 0.26, 0.52, 0.61, 0.72, 0.94]), label=r"$\beta=0.30$")
plt.plot(STANDARD, np.array([0.2840, 0.2842, 0.2844, 0.30, 0.36, 0.55, 0.82, 1.01, 1.08, 1.10]),label=r"$\beta=0.50$")
plt.xlabel("LNN Parameter Count")
plt.ylabel("Testing MSE")
plt.title("Testing MSE vs. LNN Parameter Count Across Noise Levels")
plt.legend()
plt.show()


# %%
