import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

// Create a type for waitlist data
export interface WaitlistData {
  full_name: string;
  email: string;
}

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL:
        import.meta.env.VITE_API_URL || "https://defifundr.koyeb.app/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 seconds timeout
    });

    // Request interceptor for handling auth tokens, etc.
    this.api.interceptors.request.use(
      (config) => {
        // You can add auth token logic here if needed
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for handling common errors
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle common errors
        if (error.response) {
          // Log only in development
          if (import.meta.env.DEV) {
            console.error("API Error:", error.response.data);
          }

          // Handle specific status codes
          switch (error.response.status) {
            case 401:
              // Handle unauthorized
              break;
            case 429:
              // Handle rate limiting
              break;
          }
        } else if (error.request) {
          // Network error
          console.error("Network Error:", error.message);
        }

        return Promise.reject(error);
      }
    );
  }

  // Join waitlist
  async joinWaitlist(data: WaitlistData) {
    try {
      const response = await this.api.post("/waitlist", data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Generic GET method
  async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Generic POST method
  async post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.api.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Error handler
  private handleError(error: unknown) {
    if (axios.isAxiosError(error)) {
      // Extract the error message from the response
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "An unknown error occurred";

      // You can customize error handling based on your API
      return new Error(errorMessage);
    }

    return new Error("An unexpected error occurred");
  }
}

// Create a singleton instance
const apiService = new ApiService();
export default apiService;
